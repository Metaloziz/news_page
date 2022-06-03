import { DEFAULT_FIRST_COUNT_SECTIONS, FIRST_ARRAY_ITEM } from 'constants/constants'
import { SectionType } from 'store/types'

export const getSelectSection = (sections: SectionType[]): SectionType[] => {
  const copySections = [...sections]

  copySections.splice(FIRST_ARRAY_ITEM, DEFAULT_FIRST_COUNT_SECTIONS)

  return copySections
}
