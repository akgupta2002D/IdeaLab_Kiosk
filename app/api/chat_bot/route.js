/**
 * Based on “Step-by-Step Guide: Building a RAG System with Ollama, Next.js, and LangChain”
 * by Shoaib Ahamed Shafi (Feb 20, 2025) on Medium:
 *   https://medium.com/…/building-a-rag-system-with-ollama-next-js-and-langchain-xxxxxx
 */

import { RetrievalQAChain } from "langchain/chains";
import { Ollama, OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

let vectorStore;

// Initialize your LLM and embeddings once
const ollama = new Ollama({ model: "mistral" });
const embeddings = new OllamaEmbeddings({ model: "mistral" });

async function loadVectorStore() {
  if (vectorStore) return vectorStore;

  // Load and split your document
  const filePath = path.join(process.cwd(), "public", "docs", "IdeaLabDocs.txt");
  const content = await fs.readFile(filePath, "utf8");
  const chunks = content.split("\n").filter(Boolean);

  // Create the in-memory vector store (empty metadata here)
  vectorStore = await MemoryVectorStore.fromTexts(
    chunks,
    {},          // metadata object (applied to every chunk)
    embeddings   // real OllamaEmbeddings instance
  );

  return vectorStore;
}

export async function POST(req) {
  try {
    const { query } = await req.json();
    const vs = await loadVectorStore();

    // Correct positional args: (llm, retriever)
    const chain = RetrievalQAChain.fromLLM(
      ollama,
      vs.asRetriever()
    );

    const result = await chain.call({ query });
    return NextResponse.json({ answer: result.text });
  } catch (err) {
    console.error("RAG error:", err);
    return NextResponse.json(
      { error: "Processing error" },
      { status: 500 }
    );
  }
}
