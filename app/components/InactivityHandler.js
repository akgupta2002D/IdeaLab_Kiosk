// components/InactivityHandler.js
'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const InactivityHandler = ({ children, timeout = 50000 }) => {
  const router = useRouter()
  const timerId = useRef(null)

  const resetTimer = () => {
    if (timerId.current) clearTimeout(timerId.current)
    timerId.current = setTimeout(() => {
      router.push('/')
    }, timeout)
  }

  useEffect(() => {
    const events = [
      'mousemove',
      'mousedown',
      'keypress',
      'touchstart',
      'scroll'
    ]
    events.forEach(event => document.addEventListener(event, resetTimer))

    resetTimer() // Initialize the timer on component mount

    return () => {
      if (timerId.current) clearTimeout(timerId.current)
      events.forEach(event => document.removeEventListener(event, resetTimer))
    }
  }, [])

  return <>{children}</>
}

export default InactivityHandler
