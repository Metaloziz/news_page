const NEXT_MONTH = 1

export const TODAY_DATE = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`
