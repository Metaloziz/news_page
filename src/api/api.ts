import {NewsPayloadType, NewsType} from "api/data";
import {newsOnPage} from "utils/consts";
import {RequestSource} from "utils/enums";
import {instance} from "api/instance";
import {CommentType} from "store/news_reducer";


export const newsRequests = {
  createNews: (newNews: NewsPayloadType) => instance
    .post(RequestSource.NEWS + '/', newNews),
  getNewsPart: (pageNumber: number) => instance
    .get<{ Data: NewsType[] }>(`${RequestSource.NEWS}/?page=${pageNumber}&limit=${newsOnPage}`),
  deleteNews: (newsId: number) => instance.delete<{ id: number }>(`${RequestSource.NEWS}/${newsId}`),
  addNewsViewsValue: (newsId: number) => instance.patch(`${RequestSource.NEWS}/${newsId}`),
}

export type AddCommentPayloadType = Pick<CommentType, 'author' | 'news_id' | 'text'>

export const commentsRequests = {
  getComments: (newsId: number) => instance.get<{ data: CommentType[] }>(`${RequestSource.NEWS}/${newsId}${RequestSource.COMMENTS}`),
  removeComment: (commentId: number) => instance.delete(`${RequestSource.COMMENTS}/${commentId}`),
  addComment: (payload: AddCommentPayloadType) => instance.post(RequestSource.COMMENTS + '/', payload),
}
