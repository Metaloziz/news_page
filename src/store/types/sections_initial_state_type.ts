import { SectionType } from 'store/types/section_type'

export type SectionsInitialStateType = {
  sections: SectionType[]
  defaultSection: SectionType
  activeSectionId: number
}
