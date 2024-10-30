// pages/api/staff.js
import { db } from '../../lib/firebase'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'staff'))
      const staffList = []
      querySnapshot.forEach(doc => {
        staffList.push({ id: doc.id, ...doc.data() })
      })
      res.status(200).json(staffList)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch staff data' })
    }
  }
  if (req.method === 'POST') {
    const { id, isOnShift } = req.body
    try {
      const staffRef = doc(db, 'staff', id)
      await updateDoc(staffRef, { isOnShift })
      res.status(200).json({ message: 'Shift status updated' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to update shift status' })
    }
  }
}
