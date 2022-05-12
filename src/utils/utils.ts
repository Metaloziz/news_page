const NEXT_MONTH = 1

export const TODAY_DATE = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`

export const findIndexElement = (array: any[], elementId: number): number =>
  array.findIndex(el => el.id === elementId)

// export const findElement = <T>(array: T[], elementId: number): T | undefined =>
//   array.find(el => el.id === elementId)
