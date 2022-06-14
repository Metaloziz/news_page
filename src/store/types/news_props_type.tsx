import { NewsType } from 'store/types/news_type'

export type NewsPropsType = {
  data: NewsType
  setCurrentNews: (id: number) => void
  newsRouteHandle: () => void
  deleteNews: (id: number) => void
  isAdmin: boolean
}
