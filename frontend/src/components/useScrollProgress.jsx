"use client"

import { useEffect, useRef, useState } from "react"

export const useScrollProgress = () => {
  const elementRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const element = elementRef.current
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const elementHeight = element.clientHeight

      // Calculate when element comes into view and scrolls past
      const scrolled = ((windowHeight - elementTop) / (windowHeight + elementHeight)) * 100
      setScrollProgress(Math.max(0, Math.min(100, scrolled)))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrollProgress, elementRef }
}
