import { instance } from 'api/instance'
import { CommentType } from 'store/news_reducer'
import { RequestSource } from 'utils/enums'

export type PostCommentPayloadType = Pick<CommentType, 'author' | 'news_id' | 'text'>

export const commentsRequests = {
  getComments: (newsId: number) =>
    instance.get<{ data: CommentType[] }>(
      `${RequestSource.NEWS}/${newsId}${RequestSource.COMMENTS}`,
    ),

  deleteComment: (commentId: number) =>
    instance.delete(`${RequestSource.COMMENTS}/${commentId}`),

  postComment: (comment: PostCommentPayloadType) =>
    instance.post(`${RequestSource.COMMENTS}/`, comment),
}
