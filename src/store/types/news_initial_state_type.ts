import { NewsType } from 'store/types/news_type'

export type NewsInitialStateType = {
  news: NewsType[]
  currentNews: NewsType
}
