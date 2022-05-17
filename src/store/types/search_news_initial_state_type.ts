import { NewsType } from 'store/types/news_type'

export type SearchNewsInitialStateType = {
  news: NewsType[]
  partNews: NewsType[]
  currentPage: number
  pageCount: number
  part: {
    firstElementIndex: number
    lastElementIndex: number
  }
}
