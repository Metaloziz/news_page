import { SectionType } from 'store/reducers/sections_reducer'
import { RootState } from 'store/store'

export const selectorSections = (state: RootState): SectionType[] =>
  state.sections.sections
