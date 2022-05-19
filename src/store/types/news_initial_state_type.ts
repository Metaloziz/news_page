import { NewsType } from 'store/types/news_type'

export type CurrentNewsInitialStateType = {
  currentNews: NewsType
}

export type SectionNewsInitialStateType = {
  news: NewsType[]
}
