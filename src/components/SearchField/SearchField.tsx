import { FC, useCallback } from 'react'

import style from './SearchField.module.scss'

import { DebounceSearchField } from 'components/DebounceSearchField/DebounceSearchField'

type SearchFieldPropsType = {
  getNewsByKeyWord: (keyWord: string) => void
}

export const SearchField: FC<SearchFieldPropsType> = ({ getNewsByKeyWord }) => {
  const searchByKeyWord = useCallback((word: string): void => {
    getNewsByKeyWord(word)
  }, [])

  return (
    <div className={style.container}>
      <div>
        <h5>поиск новости по ключевому слову:</h5>
      </div>
      <DebounceSearchField searchValue={searchByKeyWord} />
    </div>
  )
}
