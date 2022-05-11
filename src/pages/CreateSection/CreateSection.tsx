import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './CreateSection.module.scss'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Section } from 'pages/CreateSection/Section/Section'
import { NewSectionForm } from 'pages/CreateSection/SectionForm/NewSectionForm'
import { SectionType } from 'store/sections_reducer'
import { useAppDispatch } from 'store/store'
import {
  changeSectionTC,
  createSectionsTC,
  getSectionsTC,
  removeSectionTC,
} from 'store/thunks/sections_thunks'
import { Paths } from 'utils/enums'
import { sectionsSelector } from 'utils/selectors'

export const CreateSection: FC = () => {
  const sections = useSelector(sectionsSelector)
  const sectionId = sections.map(section => section.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSectionsTC())
  }, [])

  const createSection = (section: SectionType): void => {
    dispatch(createSectionsTC(section.name))
  }

  const changeSection = (section: SectionType): void => {
    dispatch(changeSectionTC(section))
  }

  const removeSection = (id: number): void => {
    dispatch(removeSectionTC(id))
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Paths.MAIN} />
      <div className={style.body}>
        <div>
          <div className={style.create}>
            создать
            <NewSectionForm mode="add" createSection={createSection} />
          </div>
          <div className={style.create}>
            редактировать
            <NewSectionForm
              mode="edit"
              createSection={changeSection}
              sectionsId={sectionId}
            />
          </div>
        </div>
        <div className={style.list}>
          все секции:
          {sections.map(section => (
            <Section key={section.id} section={section} removeSection={removeSection} />
          ))}
        </div>
      </div>
    </div>
  )
}
