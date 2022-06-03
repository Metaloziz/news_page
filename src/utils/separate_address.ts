import { FIRST_ARRAY_ITEM, SECOND_ARRAY_ITEM } from 'constants/constants'

export const separateAddress = (address: string): string => {
  const arr = address.split('<br>')

  return arr[FIRST_ARRAY_ITEM] + arr[SECOND_ARRAY_ITEM]
}
