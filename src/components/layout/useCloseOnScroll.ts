import { useEffect, useRef } from 'react'

import useScroll from '../../utils/useScroll'

export const usePrevious = (value: number): number | undefined => {
  const ref = useRef<number>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const useCloseOnScroll = (onClose: () => void): void => {
  const { y } = useScroll()
  const prevY = usePrevious(y)

  useEffect(() => {
    // Close element on scroll
    if (y !== prevY && prevY !== undefined) {
      onClose()
    }
  }, [onClose, y, prevY])
}

export default useCloseOnScroll
