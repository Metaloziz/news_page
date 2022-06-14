import { FIRST_ARRAY_ITEM } from 'constants/constants'

export const imageUrlHandle = (url: string): string => {
  if (url[FIRST_ARRAY_ITEM] === '/') {
    return `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_IMAGE_PORT}/images${url}`
  }
  return url
}
