import { Dispatch } from 'redux'

import {
  ALL_SECTION_ID,
  DEFAULT_FIRST_COUNT_SECTIONS,
  FIRST_ARRAY_ITEM,
  ITEC_SECTION_ID,
  OTHER_SECTION_ID,
  POPULAR_SECTION_ID,
  SECOND_ARRAY_ITEM,
} from 'constants/constants'
import { setErrorTrueAC } from 'store/reducers/app_reducer'
import { SectionType } from 'store/types'
import { ResponseErrorType } from 'store/types/response_error_type'

// today date
const NEXT_MONTH = 1

export const todayDate = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`

// find object
export const findIndexElement = (array: any[], elementId: number): number =>
  array.findIndex(el => el.id === elementId)

type ObjectType = {
  id: number
}

export const findElement = <T>(array: (T & ObjectType)[], elementId: number): T =>
  array.find(({ id }) => id === elementId)!

// separate the error from the request
export const setError = (dispatch: Dispatch, errorData: ResponseErrorType): void => {
  const {
    response: {
      data: { message },
    },
  } = errorData

  if (message) {
    dispatch(setErrorTrueAC(message))
  } else {
    dispatch(setErrorTrueAC('some error'))
  }
}

// separate the address from the request
export const separateAddress = (address: string): string => {
  const arr = address.split('<br>')

  return arr[FIRST_ARRAY_ITEM] + arr[SECOND_ARRAY_ITEM]
}

// convert date view

export const convertDateView = (date: string): string => {
  const DAY_INDEX = 0
  const MONTH_INDEX = 1
  const YEAR_INDEX = 2

  const SINGLE_DATE_NUMBER = 1

  const draftArr = date
    .split('-')
    .reverse()
    .map(number => (number.length === SINGLE_DATE_NUMBER ? `0${number}` : number))

  return `${draftArr[DAY_INDEX]}.${draftArr[MONTH_INDEX]}.${draftArr[YEAR_INDEX]}`
}

// get section for select
export const getSelectSection = (sections: SectionType[]): SectionType[] => {
  const copySections = [...sections]

  copySections.splice(FIRST_ARRAY_ITEM, DEFAULT_FIRST_COUNT_SECTIONS)

  return copySections
}

// is disable sections edit button
export const isDisable = (sectionId: number): boolean =>
  sectionId !== OTHER_SECTION_ID &&
  sectionId !== POPULAR_SECTION_ID &&
  sectionId !== ITEC_SECTION_ID &&
  sectionId !== ALL_SECTION_ID
