import { FC, useCallback } from 'react'

import style from './SearchField.module.scss'

import { DebounceSearchField } from 'components/DebounceSearchField/DebounceSearchField'

export const SearchField: FC = () => {
  const searchByKeyWord = useCallback((word: string): void => {
    console.log(word)
  }, [])

  return (
    <div className={style.container}>
      <DebounceSearchField searchValue={searchByKeyWord} />
    </div>
  )
}
