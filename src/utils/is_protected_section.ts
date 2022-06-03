import {
  ALL_SECTION_ID,
  ITEC_SECTION_ID,
  OTHER_SECTION_ID,
  POPULAR_SECTION_ID,
} from 'constants/constants'

export const isProtectedSection = (sectionId: number): boolean =>
  sectionId !== OTHER_SECTION_ID &&
  sectionId !== POPULAR_SECTION_ID &&
  sectionId !== ITEC_SECTION_ID &&
  sectionId !== ALL_SECTION_ID
