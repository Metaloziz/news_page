import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './CreateSection.module.scss'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Section } from 'pages/CreateSection/Section/Section'
import { SectionForm } from 'pages/CreateSection/SectionForm/SectionForm'
import { useAppDispatch } from 'store/store'
import { createSectionsTC, getSectionsTC } from 'store/thunks/sections_thunks'
import { Paths } from 'utils/enums'
import { sectionsSelector } from 'utils/selectors'

export const CreateSection: FC = () => {
  const sections = useSelector(sectionsSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSectionsTC())
  }, [])

  const createSection = (name: string): void => {
    dispatch(createSectionsTC(name))
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Paths.MAIN} />
      <div className={style.create}>
        <SectionForm createSection={createSection} />
      </div>
      <div className={style.list}>
        все секции:
        {sections.map(section => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}
