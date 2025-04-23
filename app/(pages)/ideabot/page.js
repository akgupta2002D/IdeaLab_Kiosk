/**
 * @file        /ideabot/page.js
 * @description This file defines the RAGChatPage component, which serves as the main interface for interacting with the IdeaLab Assistant chatbot.
 * It includes a chat interface for users to input queries and view responses from the chatbot.
 *
 * @dependencies
 * - React (useState)
 * - next/image (Image component for optimized image rendering)
 * - CSS styles (chat_bot.css)
 *
 * @notes
 * - The component manages the chatbot's state, including the user's query, the last query, the bot's response, and the loading status.
 * - The `fetchAnswer` function sends the user's query to the `/api/chat_bot` endpoint and updates the response state with the bot's answer.
 * - The layout includes a welcome screen, a chat bubble for the user's query, a status message, and a chat bubble for the bot's response.
 * - The input box allows users to type their queries and submit them either by pressing Enter or clicking the "Ask" button.
 */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import '../../components/ideabot/styles/chat_bot.css';
import BackButton from '@/app/components/general/BackButton';

export default function RAGChatPage() {
  const [query, setQuery] = useState('');
  const [lastQuery, setLastQuery] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');
  const [showBotCenter, setShowBotCenter] = useState(true);

  const fetchAnswer = async () => {
    if (!query.trim()) return;

    const prompt = query;
    setLastQuery(prompt);
    setQuery('');
    setShowBotCenter(false);
    setResponse('');
    setStatus('The ideabot is looking in its documents...');

    // quickly switch to loading state
    setTimeout(() => setStatus('Loading...'), 500);

    try {
      const res = await fetch('/api/chat_bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: prompt })
      });
      const data = await res.json();
      setStatus('');
      setResponse(data.answer);
    } catch (err) {
      setStatus('Error fetching response.');
      console.error(err);
    }
  };

  return (
    <>
    
    <div className="chat-container">
    <BackButton />

      {showBotCenter && (
        <div className="bot-center">
          <Image src="/idea_bot.png" alt="Bot" width={400} height={400} />
          <p className="bot-welcome">Hi! I’m your IdeaLab Assistant. Ask me anything!</p>
        </div>
      )}

      {/* User question on top */}
      {!showBotCenter && lastQuery && (
        <div className="chat-bubble user">
          <div className="chat-text right">{lastQuery}</div>
        </div>
      )}

      {/* Status messages */}
      {!showBotCenter && status && (
        <div className="chat-bubble bot">
          <Image src="/idea_bot.png" alt="Bot" width={100} height={100} />
          <div className="chat-text left">{status}</div>
        </div>
      )}

      {/* Bot response below */}
      {!showBotCenter && response && (
        <div className="chat-bubble bot">
          <Image src="/idea_bot.png" alt="Bot" width={100} height={100} />
          <div className="chat-text left">{response}</div>
        </div>
      )}

      <div className="chat-input-box">
        <input
          type="text"
          placeholder="Ask me about IdeaLab..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchAnswer()}
        />
        <button onClick={fetchAnswer}>Ask</button>
      </div>
    </div>
    </>
  );
}
