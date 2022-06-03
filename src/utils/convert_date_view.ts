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
