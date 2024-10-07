// firebaseUtils.js

import { db } from '../firebase' // Adjust the path if necessary
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

/**
 * Create a new document with an auto-generated ID
 */
export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    console.log('Document created with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

/**
 * Read a document by ID
 */
export const readDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
      return docSnap.data()
    } else {
      console.log('No such document!')
      return null
    }
  } catch (error) {
    console.error('Error reading document:', error)
    throw error
  }
}

/**
 * Update an existing document
 */
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId)
    await updateDoc(docRef, data)
    console.log('Document updated successfully')
  } catch (error) {
    console.error('Error updating document:', error)
    throw error
  }
}

/**
 * Delete a document by ID
 */
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId)
    await deleteDoc(docRef)
    console.log('Document deleted successfully')
  } catch (error) {
    console.error('Error deleting document:', error)
    throw error
  }
}
