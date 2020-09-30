import { useLocation } from '@reach/router'
import { useMemo, FunctionComponent, SVGAttributes } from 'react'

export interface Links {
  text: string
  location?: string
  icon?: FunctionComponent<SVGAttributes<SVGElement>>
}

export interface NavlinkProps extends Links {
  sublinks?: Links[]
}

const useSublinkMatch = (location = '', sublinks: Links[] = []): boolean => {
  const { pathname } = useLocation()
  const isMatch = useMemo(() => {
    if (location && pathname.includes(location || '')) {
      return true
    }

    if (sublinks.length === 0) {
      return false
    }

    return !!sublinks.find((sublink) =>
      pathname.includes(sublink.location || ''),
    )
  }, [sublinks, location])
  return isMatch
}

export default useSublinkMatch
