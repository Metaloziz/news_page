import { FC } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './Navigation.module.scss'

import { NavigationSelect, SearchField } from 'components/commonComponents'
import { SectionButton } from 'components/SectionButton'
import {
  DESCKTOP_WIDTH,
  FIRST_ARRAY_ITEM,
  NEWS_BY_SEARCHING,
  NEWS_BY_SECTIONS,
  SECOND_ARRAY_ITEM,
  THIRD_ARRAY_ITEM,
} from 'constants/constants'
import { Path } from 'enums'
import { useElementWidth } from 'hooks'
import { changeNewsTypeViewAC, setCurrentSectionAC, setFirstPageAC } from 'store/reducers'
import { selectIdActiveSection, selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { getPopularNewsTC, getSearchNewsTC } from 'store/thunks'
import { SectionType } from 'store/types'
import { getSelectSection } from 'utils/get_select_section'

export const Navigation: FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const sections = useSelector(selectSections)
  const activeSection = useSelector(selectIdActiveSection)

  const [ref, isDescktopWidth] = useElementWidth(DESCKTOP_WIDTH)

  const isActiveSection = (id: number): boolean => id === activeSection

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

  let ALL_SECTION: SectionType | undefined
  let POPULAR_SECTION: SectionType | undefined
  let ITEC_SECTION: SectionType | undefined

  let SELECT_SECTION: SectionType[] | undefined = sections

  let OTHER_SECTION: SectionType | undefined

  if (isDescktopWidth) {
    ALL_SECTION = sections[FIRST_ARRAY_ITEM]
    POPULAR_SECTION = sections[SECOND_ARRAY_ITEM]
    ITEC_SECTION = sections[THIRD_ARRAY_ITEM]

    SELECT_SECTION = getSelectSection(sections)

    OTHER_SECTION = SELECT_SECTION.pop()
  }

  return (
    <div className={style.main} ref={ref}>
      <div className={style.container}>
        {!!ALL_SECTION && (
          <SectionButton
            isActive={isActiveSection(ALL_SECTION.id)}
            name={ALL_SECTION.name}
            onClick={() => setCurrentSection(ALL_SECTION!.id)}
          />
        )}

        {!!POPULAR_SECTION && (
          <SectionButton
            isActive={isActiveSection(POPULAR_SECTION.id)}
            name={POPULAR_SECTION.name}
            onClick={() => setPopularNews(POPULAR_SECTION!.id)}
          />
        )}

        {ITEC_SECTION && (
          <SectionButton
            isActive={isActiveSection(ITEC_SECTION.id)}
            name={ITEC_SECTION.name}
            onClick={() => setCurrentSection(ITEC_SECTION!.id)}
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
            isActive={isActiveSection(OTHER_SECTION.id)}
            onClick={() => setCurrentSection(OTHER_SECTION!.id)}
          />
        )}
      </div>
      <SearchField getNewsByKeyWord={getNewsByKeyWord} />
    </div>
  )
}
