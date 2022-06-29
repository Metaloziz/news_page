import { SECOND_ARRAY_ITEM } from 'constants/constants'

export const separateToken = (token: string): string => {
  const array = token.split(' ')
  return array[SECOND_ARRAY_ITEM]
}
