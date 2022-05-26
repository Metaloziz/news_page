import { instance } from 'api/instance'
import { FIRST_ARRAY_ITEM } from 'components/Footer/Footer'
import { ALL_SECTION_ID, NEWS_ON_PAGE } from 'constants/constants'
import { RequestSource } from 'enums/enums'
import { NewsBodyType, NewsFileType, NewsType } from 'store/types'

export type NewsPayloadType = NewsFileType & {
  body: NewsBodyType
}

export const newsRequests = {
  postNews: (news: NewsPayloadType) => {
    const formDataObject = new FormData()

    formDataObject.append('body', JSON.stringify(news.body))
    if (news.file?.length) {
      formDataObject.append('file', news.file[FIRST_ARRAY_ITEM])
    }

    return instance.post<{ id: number }>(`${RequestSource.NEWS}/`, formDataObject)
  },

  updateNews: (news: NewsPayloadType, newsId: number) => {
    const formDataObject = new FormData()

    formDataObject.append('body', JSON.stringify(news.body))
    if (news.file?.length) {
      formDataObject.append('file', news.file[FIRST_ARRAY_ITEM])
    }

    return instance.put(`${RequestSource.NEWS}/${newsId}`, formDataObject)
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
