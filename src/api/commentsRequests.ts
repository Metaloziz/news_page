import { instance } from 'api/instance'
import { CommentType } from 'store/news_reducer'
import { RequestSource } from 'utils/enums'

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
