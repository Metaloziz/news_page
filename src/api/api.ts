import { NewsFileType, NewsBodyType, NewsType } from 'api/data'
import { instance } from 'api/instance'
import { CommentType } from 'store/news_reducer'
import { NEWS_ON_PAGE } from 'utils/consts'
import { RequestSource } from 'utils/enums'

export type NewsPayloadType = {
  body: NewsBodyType
} & NewsFileType

export const newsRequests = {
  createNews: (news: NewsPayloadType) => {
    const formDataObject = new FormData()
    const blob = new Blob([news.file], { type: 'image/' })

    formDataObject.append('file', 'new Blob})')

    return instance.post(`${RequestSource.NEWS}/`, formDataObject, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  getNewsPart: (pageNumber: number) =>
    instance.get<{ Data: NewsType[] }>(
      `${RequestSource.NEWS}/?page=${pageNumber}&limit=${NEWS_ON_PAGE}`,
    ),
  deleteNews: (newsId: number) =>
    instance.delete<{ id: number }>(`${RequestSource.NEWS}/${newsId}`),
  addNewsViewsValue: (newsId: number) =>
    instance.patch(`${RequestSource.NEWS}/${newsId}`),
}

export type AddCommentPayloadType = Pick<CommentType, 'author' | 'news_id' | 'text'>

export const commentsRequests = {
  getComments: (newsId: number) =>
    instance.get<{ data: CommentType[] }>(
      `${RequestSource.NEWS}/${newsId}${RequestSource.COMMENTS}`,
    ),
  removeComment: (commentId: number) =>
    instance.delete(`${RequestSource.COMMENTS}/${commentId}`),
  addComment: (payload: AddCommentPayloadType) =>
    instance.post(`${RequestSource.COMMENTS}/`, payload),
}
