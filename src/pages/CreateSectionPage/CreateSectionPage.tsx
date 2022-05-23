import { FC, useCallback } from 'react'

import { useSelector } from 'react-redux'

import style from './CreateSectionPage.module.scss'
import { Section } from './Section/Section'
import { NewSectionForm } from './SectionForm/NewSectionForm'

import { NavLinkComponent } from 'components'
import {
  ITEC_SECTION_ID,
  OTHER_SECTION_ID,
  POPULAR_SECTION_ID,
} from 'constants/constants'
import { Path } from 'enums/enums'
import { setErrorTrueAC } from 'store/reducers'
import { selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { changeSectionTC, deleteSectionTC, postSectionsTC } from 'store/thunks'
import { SectionType } from 'store/types'

export const CreateSectionPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectSections)

  const sectionsId = sections.map(section => section.id)

  const postSection = useCallback((section: SectionType): void => {
    dispatch(postSectionsTC(section.name))
  }, [])

  const changeSection = useCallback((section: SectionType): void => {
    if (
      section.id !== OTHER_SECTION_ID &&
      section.id !== POPULAR_SECTION_ID &&
      section.id !== ITEC_SECTION_ID
    ) {
      dispatch(changeSectionTC(section))
      return
    }
    dispatch(setErrorTrueAC('нельзя изменять'))
  }, [])

  const deleteSection = useCallback((id: number): void => {
    if (id !== OTHER_SECTION_ID && id !== POPULAR_SECTION_ID && id !== ITEC_SECTION_ID) {
      dispatch(deleteSectionTC(id))
      return
    }
    dispatch(setErrorTrueAC('нельзя удалять'))
  }, [])

  const sectionTags = sections.map(section => (
    <Section key={section.id} section={section} deleteSection={deleteSection} />
  ))

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
          {sectionTags}
        </div>
      </div>
    </div>
  )
}
