import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Navigation.module.scss'

import { SearchField } from 'components/SearchField'
import { SectionButton } from 'components/SectionButton/SectionButton'
import { NEWS_BY_SEARCHING, NEWS_BY_SECTIONS } from 'constants/constants'
import { changeNewsTypeViewAC, setCurrentSectionAC, setFirstPageAC } from 'store/reducers'
import { selectorIdActiveSection, selectorSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { getNewsByKeyWordTC } from 'store/thunks'

export const Navigation: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectorSections)
  const activeSection = useSelector(selectorIdActiveSection)

  const isActiveStyle = (id: number): boolean => id === activeSection

  const setCurrentSection = (sectionId: number): void => {
    dispatch(setCurrentSectionAC(sectionId))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SECTIONS))
    dispatch(setFirstPageAC())
  }

  const getNewsByKeyWord = (keyWord: string): void => {
    dispatch(getNewsByKeyWordTC(keyWord))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SEARCHING))
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        {sections.map(({ name, id }) => (
          <SectionButton
            key={id}
            name={name}
            isActive={isActiveStyle(id)}
            onClick={() => setCurrentSection(id)}
          />
        ))}
      </div>
      <SearchField getNewsByKeyWord={getNewsByKeyWord} />
    </div>
  )
}
