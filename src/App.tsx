import { FC, useEffect } from 'react'

import { ErrorComponent } from 'components/ErrorComponent/ErrorComponent'
import { RoutesComponent } from 'components/RoutesComponent/RoutesComponent'
import { useAppDispatch } from 'store/store'
import { getSectionsTC } from 'store/thunks/sections_thunks'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // initial request
  useEffect(() => {
    dispatch(getSectionsTC())
  }, [])

  return (
    <div>
      <RoutesComponent />
      <ErrorComponent />
    </div>
  )
}

export default App
