import { useEffect, useRef } from 'react'

export const useEffectOnce = (effect: () => void | (() => void)): void => {
  const destroyFunc = useRef<void | (() => void)>()
  const calledOnce = useRef(false)
  const renderAfterCalled = useRef(false)

  if (calledOnce.current) {
    renderAfterCalled.current = true
  }

  useEffect(() => {
    if (calledOnce.current) {
      return
    }

    calledOnce.current = true
    destroyFunc.current = effect()

    // eslint-disable-next-line consistent-return
    return () => {
      if (!renderAfterCalled.current) {
        return
      }

      if (destroyFunc.current) {
        destroyFunc.current()
      }
    }
  }, [effect])
}
