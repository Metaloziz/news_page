import { FIRST_ARRAY_ITEM, SECOND_ARRAY_ITEM } from 'constants/constants'

export const separateAddress = (address: string): string => {
  const array = address.split('<br>')

  return array[FIRST_ARRAY_ITEM] + array[SECOND_ARRAY_ITEM]
}
