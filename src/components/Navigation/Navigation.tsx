import { FC } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './Navigation.module.scss'

import { NavigationSelect, SearchField } from 'components/commonComponents'
import { SectionButton } from 'components/SectionButton'
import {
  FIRST_ARRAY_ITEM,
  NEWS_BY_SEARCHING,
  NEWS_BY_SECTIONS,
  SECOND_ARRAY_ITEM,
  THIRD_ARRAY_ITEM,
} from 'constants/constants'
import { Path } from 'enums'
import { changeNewsTypeViewAC, setCurrentSectionAC, setFirstPageAC } from 'store/reducers'
import { selectIdActiveSection, selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { getPopularNewsTC, getSearchNewsTC } from 'store/thunks'
import { getSelectSection } from 'utils/get_select_section'

export const Navigation: FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const sections = useSelector(selectSections)
  const activeSection = useSelector(selectIdActiveSection)

  const isActiveStyle = (id: number): boolean => id === activeSection

  const setCurrentSection = (sectionId: number): void => {
    navigate(Path.MAIN)
    dispatch(setCurrentSectionAC(sectionId))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SECTIONS))
    dispatch(setFirstPageAC())
  }

  const setPopularNews = (sectionId: number): void => {
    navigate(Path.MAIN)
    dispatch(changeNewsTypeViewAC(NEWS_BY_SEARCHING))
    dispatch(setCurrentSectionAC(sectionId))
    dispatch(getPopularNewsTC())
    dispatch(setFirstPageAC())
  }

  const getNewsByKeyWord = (keyWord: string): void => {
    navigate(Path.MAIN)
    dispatch(getSearchNewsTC(keyWord))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SEARCHING))
  }

  const ALL_SECTION = sections[FIRST_ARRAY_ITEM]
  const POPULAR_SECTION = sections[SECOND_ARRAY_ITEM]
  const ITEC_SECTION = sections[THIRD_ARRAY_ITEM]

  const SELECT_SECTION = getSelectSection(sections)

  const OTHER_SECTION = SELECT_SECTION.pop()

  return (
    <div className={style.main}>
      <div className={style.container}>
        <SectionButton
          isActive={isActiveStyle(ALL_SECTION.id)}
          name={ALL_SECTION.name}
          onClick={() => setCurrentSection(ALL_SECTION.id)}
        />

        {POPULAR_SECTION && (
          <SectionButton
            isActive={isActiveStyle(POPULAR_SECTION.id)}
            name={POPULAR_SECTION.name}
            onClick={() => setPopularNews(POPULAR_SECTION.id)}
          />
        )}

        {ITEC_SECTION && (
          <SectionButton
            isActive={isActiveStyle(ITEC_SECTION.id)}
            name={ITEC_SECTION.name}
            onClick={() => setCurrentSection(ITEC_SECTION.id)}
          />
        )}

        <NavigationSelect
          sections={SELECT_SECTION}
          activeSectionId={activeSection}
          handleCurrentCount={setCurrentSection}
        />

        {OTHER_SECTION && (
          <SectionButton
            name={OTHER_SECTION.name}
            isActive={isActiveStyle(OTHER_SECTION.id)}
            onClick={() => setCurrentSection(OTHER_SECTION.id)}
          />
        )}
      </div>
      <SearchField getNewsByKeyWord={getNewsByKeyWord} />
    </div>
  )
}
