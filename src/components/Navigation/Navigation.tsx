import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Navigation.module.scss'

import { Button } from 'components/Button/Button'
import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { SearchField } from 'components/SearchField/SearchField'
import { Path } from 'enums/enums'
import { setCurrentSectionAC } from 'store/reducers/sections_reducer'
import { selectorIdActiveSection, selectorSections } from 'store/selectors/sections'
import { useAppDispatch } from 'store/store'

export const Navigation: FC = () => {
  const sections = useSelector(selectorSections)
  const activeSection = useSelector(selectorIdActiveSection)

  const dispatch = useAppDispatch()

  const isActiveStyle = (id: number): string =>
    ` ${style.path}  ${activeSection === id ? style.active : null}`

  const setCurrentSection = (sectionId: number): void => {
    dispatch(setCurrentSectionAC(sectionId))
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
      <SearchField />
    </div>
  )
}
