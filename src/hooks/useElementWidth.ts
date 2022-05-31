import { useEffect, useRef, useState } from 'react'

import { FIRST_ARRAY_ITEM } from 'constants/constants'

export const useElementWidth = (borderWidth: number): any[] => {
  const ref: any = useRef()
  const [widthElement, setWidth] = useState<boolean>(true)

  const observer = useRef(
    new ResizeObserver(entries => {
      const { width } = entries[FIRST_ARRAY_ITEM].contentRect
      setWidth(width > borderWidth)
    }),
  )

  useEffect(() => {
    observer.current.observe(ref.current)
  }, [ref, observer])

  return [ref, widthElement]
}
