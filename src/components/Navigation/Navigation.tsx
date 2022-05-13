import { FC } from 'react'

import { useSelector } from 'react-redux'

import { SearchButton } from '../SearchButton/SearchButton'

import style from './Navigation.module.scss'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Path } from 'enums/enums'
import { selectorIdActiveSection, selectorSections } from 'store/selectors/sections'

export const Navigation: FC = () => {
  const sections = useSelector(selectorSections)
  const activeSection = useSelector(selectorIdActiveSection)

  const isActiveStyle = (id: number): string =>
    ` ${style.path}  ${activeSection === id ? style.active : null}`

  return (
    <div className={style.main}>
      <div className={style.container}>
        {sections.map(({ name, id }) => (
          <div key={id} className={isActiveStyle(id)}>
            {name}
          </div>
        ))}
        <NavLinkComponent nameButton="создать секцию" path={Path.CREATE_SECTION} />
      </div>
      <SearchButton />
    </div>
  )
}
