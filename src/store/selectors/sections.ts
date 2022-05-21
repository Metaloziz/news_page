import { RootState } from 'store/store'
import { SectionType } from 'store/types/section_type'

export const selectSections = (state: RootState): SectionType[] => state.sections.sections

export const selectIdActiveSection = (state: RootState): number =>
  state.sections.activeSectionId
