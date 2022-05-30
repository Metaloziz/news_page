const NEXT_MONTH = 1

export const todayDate = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`
