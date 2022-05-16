import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Navigation.module.scss'

import { Button } from 'components/Button/Button'
import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { SearchField } from 'components/SearchField/SearchField'
import { NEWS_BY_SEARCHING, NEWS_BY_SECTIONS } from 'constants/constants'
import { Path } from 'enums/enums'
import { changeNewsTypeViewAC } from 'store/reducers/app_reducer'
import { setCurrentSectionAC } from 'store/reducers/sections_reducer'
import { selectorIdActiveSection, selectorSections } from 'store/selectors/sections'
import { useAppDispatch } from 'store/store'
import { getNewsByKeyWordTC } from 'store/thunks/search_news_thunks'

export const Navigation: FC = () => {
  const dispatch = useAppDispatch()

  const activeSection = useSelector(selectorIdActiveSection)
  const sections = useSelector(selectorSections)

  const isActiveStyle = (id: number): string =>
    ` ${style.path}  ${activeSection === id ? style.active : null}`

  const setCurrentSection = (sectionId: number): void => {
    dispatch(setCurrentSectionAC(sectionId))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SECTIONS))
  }

  const getNewsByKeyWord = (keyWord: string): void => {
    dispatch(getNewsByKeyWordTC(keyWord))

    dispatch(changeNewsTypeViewAC(NEWS_BY_SEARCHING))
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        {sections.map(({ name, id }) => (
          <Button
            key={id}
            name={name}
            className={isActiveStyle(id)}
            onClick={() => setCurrentSection(id)}
          />
        ))}
        <NavLinkComponent nameButton="создать секцию" path={Path.CREATE_SECTION} />
      </div>
      <SearchField getNewsByKeyWord={getNewsByKeyWord} />
    </div>
  )
}
