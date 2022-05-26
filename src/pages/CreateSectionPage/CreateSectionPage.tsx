import { FC, useCallback } from 'react'

import { useSelector } from 'react-redux'

import style from './CreateSectionPage.module.scss'
import { Section } from './Section/Section'
import { NewSectionForm } from './SectionForm/NewSectionForm'

import { NavLinkComponent } from 'components'
import { Error, Path } from 'enums/enums'
import { setErrorTrueAC } from 'store/reducers'
import { selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { changeSectionTC, deleteSectionTC, postSectionsTC } from 'store/thunks'
import { SectionType } from 'store/types'
import { isDisable } from 'utils/utils'

export const CreateSectionPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectSections)

  const postSection = useCallback((section: SectionType): void => {
    dispatch(postSectionsTC(section.name))
  }, [])

  const changeSection = useCallback((section: SectionType): void => {
    if (isDisable(section.id)) {
      dispatch(changeSectionTC(section))
      return
    }
    dispatch(setErrorTrueAC(Error.PROTECT_SECTION))
  }, [])

  const deleteSection = useCallback((sectionId: number): void => {
    if (isDisable(sectionId)) {
      dispatch(deleteSectionTC(sectionId))
      return
    }
    dispatch(setErrorTrueAC(Error.PROTECT_SECTION))
  }, [])

  const sectionTags = sections.map(section => (
    <Section key={section.id} section={section} deleteSection={deleteSection} />
  ))

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />

      <div className={style.body}>
        <div className={style.create}>
          <h3>Создать новую секцию :</h3>
          <NewSectionForm mode="add" setSectionData={postSection} />
        </div>

        <div className={style.create}>
          <h3>Редактировать имя секции :</h3>
          <NewSectionForm
            mode="edit"
            setSectionData={changeSection}
            sections={sections}
          />
        </div>
      </div>

      <div className={style.list}>
        <h3>Существующие секции :</h3>
        <div className={style.listItems}>{sectionTags}</div>
      </div>
    </div>
  )
}
