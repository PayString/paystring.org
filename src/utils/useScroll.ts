import { useState, useEffect } from 'react'

type ScrollDirection = 'down' | 'up' | undefined

interface ScrollInformation {
  x: number
  y: number
  direction: ScrollDirection
}

const useScroll = (): ScrollInformation => {
  const [scroll, setScroll] = useState<ScrollInformation>({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
    direction: undefined,
  })

  const getDirection = (prev: ScrollInformation): ScrollDirection => {
    if (typeof window === 'undefined') return prev.direction
    if (prev.y === window.scrollY ?? 0) return prev.direction
    return prev.y > window.scrollY ?? 0 ? 'up' : 'down'
  }

  const listener = (): void => {
    if (typeof window !== 'undefined') {
      setScroll((prev) => ({
        x: window.scrollX ?? 0,
        y: window.scrollY ?? 0,
        direction: getDirection(prev),
      }))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return (): void => window.removeEventListener('scroll', listener)
  }, [])

  return scroll
}

export default useScroll
