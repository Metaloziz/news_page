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
  postSectionsTC,
  getSectionsTC,
  deleteSectionTC,
} from 'store/thunks/sections_thunks'
import { Path } from 'utils/enums'
import { sectionsSelector } from 'utils/selectors'

export const CreateSection: FC = () => {
  const sections = useSelector(sectionsSelector)
  const sectionId = sections.map(section => section.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSectionsTC())
  }, [])

  const postSection = (section: SectionType): void => {
    dispatch(postSectionsTC(section.name))
  }

  const changeSection = (section: SectionType): void => {
    dispatch(changeSectionTC(section))
  }

  const deleteSection = (id: number): void => {
    dispatch(deleteSectionTC(id))
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <div className={style.body}>
        <div>
          <div className={style.create}>
            создать
            <NewSectionForm mode="add" setSectionData={postSection} />
          </div>
          <div className={style.create}>
            редактировать
            <NewSectionForm
              mode="edit"
              setSectionData={changeSection}
              sectionsId={sectionId}
            />
          </div>
        </div>
        <div className={style.list}>
          все секции:
          {sections.map(section => (
            <Section key={section.id} section={section} deleteSection={deleteSection} />
          ))}
        </div>
      </div>
    </div>
  )
}
