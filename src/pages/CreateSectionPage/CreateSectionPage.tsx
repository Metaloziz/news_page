import { FC, useCallback } from 'react'

import { useSelector } from 'react-redux'

import style from './CreateSectionPage.module.scss'
import { Section } from './Section/Section'
import { NewSectionForm } from './SectionForm/NewSectionForm'

import { NavLinkComponent } from 'components'
import { Path } from 'enums/enums'
import { selectorSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { changeSectionTC, deleteSectionTC, postSectionsTC } from 'store/thunks'
import { SectionType } from 'store/types'

export const CreateSectionPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectorSections)

  const sectionsId = sections.map(section => section.id)

  const postSection = useCallback((section: SectionType): void => {
    dispatch(postSectionsTC(section.name))
  }, [])

  const changeSection = useCallback((section: SectionType): void => {
    dispatch(changeSectionTC(section))
  }, [])

  const deleteSection = useCallback((id: number): void => {
    dispatch(deleteSectionTC(id))
  }, [])

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <div className={style.body}>
        <div>
          <div className={style.create}>
            <span>создать</span>
            <NewSectionForm mode="add" setSectionData={postSection} />
          </div>
          <div className={style.create}>
            <span>редактировать</span>
            <NewSectionForm
              mode="edit"
              setSectionData={changeSection}
              sectionsId={sectionsId}
            />
          </div>
        </div>
        <div className={style.list}>
          <span>все секции:</span>
          {sections.map(section => (
            <Section key={section.id} section={section} deleteSection={deleteSection} />
          ))}
        </div>
      </div>
    </div>
  )
}
