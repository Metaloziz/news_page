import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { CommentType } from 'store/reducers/news_reducer'

export type PostCommentPayloadType = Pick<CommentType, 'author' | 'news_id' | 'text'>

export const commentsRequests = {
  getComments: (newsId: number) =>
    instance.get<{ data: CommentType[] }>(
      `${RequestSource.NEWS}/${newsId}${RequestSource.COMMENTS}`,
    ),

  deleteComment: (commentId: number) =>
    instance.delete<{ id: number }>(`${RequestSource.COMMENTS}/${commentId}`),

  postComment: (comment: PostCommentPayloadType) =>
    instance.post(`${RequestSource.COMMENTS}/`, comment),
}
