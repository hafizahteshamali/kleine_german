"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedText({ text, className = "" }) {
  const ref = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // viewport ke center ke aas-paas range define karo (50%)
      const start = windowHeight * 0.5 // jab top 50% viewport tak aaye
      const end = -rect.height * 0.5 // jab bottom 50% tak chala jaye

      // normalize progress between 0 → 1 within that range
      const totalRange = start - end
      const current = start - rect.top
      const progress = Math.min(Math.max(current / totalRange, 0), 1)

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const totalChars = text.length
  const visibleChars = Math.floor(totalChars * scrollProgress)

  return (
    <div
      ref={ref}
      className={`inline-block text-black text-5xl font-semibold ${className}`}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleChars ? 1 : 0.2,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}
