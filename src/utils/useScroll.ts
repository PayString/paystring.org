import { useState, useEffect } from 'react'

type ScrollDirection = 'down' | 'up' | undefined

interface ScrollInformation {
  x: number
  y: number
  direction: ScrollDirection
}

const useScroll = (): ScrollInformation => {
  const [scroll, setScroll] = useState<ScrollInformation>({
    x: window.scrollX,
    y: window.scrollY,
    direction: undefined,
  })

  const listener = (): void => {
    setScroll((prev) => ({
      x: window.scrollX,
      y: window.scrollY,
      direction: prev.y > window.scrollY ? 'up' : 'down',
    }))
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return (): void => window.removeEventListener('scroll', listener)
  }, [])

  return scroll
}

export default useScroll
