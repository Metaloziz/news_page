import { instance } from 'api/instance'
import { ALL_SECTION_ID, NEWS_ON_PAGE } from 'constants/constants'
import { RequestSource } from 'enums/enums'
import { NewsBodyType, NewsFileType, NewsType } from 'store/types'

export type NewsPayloadType = {
  body: NewsBodyType
} & NewsFileType

export const newsRequests = {
  postNews: (news: NewsPayloadType) => {
    const formDataObject = new FormData()

    formDataObject.append('body', JSON.stringify(news.body))
    formDataObject.append('file', news.file)

    return instance.post<{ id: number }>(`${RequestSource.NEWS}/`, formDataObject, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  getNewsPart: (pageNumber: number, section: number = ALL_SECTION_ID) =>
    instance.get<{ Data: NewsType[] }>(
      `${RequestSource.NEWS}/?page=${pageNumber}&limit=${NEWS_ON_PAGE}&section_id=${section}`,
    ),

  deleteNews: (newsId: number) =>
    instance.delete<{ id: number }>(`${RequestSource.NEWS}/${newsId}`),

  addNewsViewsValue: (newsId: number) =>
    instance.patch(`${RequestSource.NEWS}/${newsId}`),

  getSearchNews: (keyWord: string) =>
    instance.get<{ Data: NewsType[] }>(
      `${RequestSource.NEWS}/${RequestSource.SEARCH}?search_query="${keyWord}"`,
    ),

  getNewsById: (newsId: number) =>
    instance.get<NewsType>(`${RequestSource.NEWS}/${newsId}`),

  getPopularNews: () =>
    instance.get<{ Data: NewsType[] }>(
      `${RequestSource.NEWS}/${RequestSource.POPULAR}?limit=${NEWS_ON_PAGE}`,
    ),
}
