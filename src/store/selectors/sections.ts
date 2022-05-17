import { RootState } from 'store/store'
import { SectionType } from 'store/types/section_type'

export const selectorSections = (state: RootState): SectionType[] =>
  state.sections.sections

export const selectorIdActiveSection = (state: RootState): number =>
  state.sections.activeSectionId
