'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // ป้องกัน hydration mismatch โดยการไม่ render ปุ่มจนกว่าจะ mount ฝั่ง client
  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" // เพิ่ม style เล็กน้อย (ปรับได้)
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}