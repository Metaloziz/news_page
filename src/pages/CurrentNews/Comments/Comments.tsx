import React, {FC, memo, useCallback} from 'react';
import style from "./Comments.module.scss";
import {useSelector} from "react-redux";
import {commentsNewsSelector} from "utils/selectors/selectors";
import {useAppDispatch} from "store/store";
import {addCommentTC, getCommentsNewsTC, removeCommentTC} from "store/news_reducer";
import {useEffectOnce} from "utils/hooks/hooks";
import {
  CommentForm,
  CommentFormType,
} from "pages/CurrentNews/Comments/CommentForm/CommentForm";
import {Comment} from "pages/CurrentNews/Comments/Comment/Comment";


type CommentsPropsType = {
  newsId: number
}

export const Comments: FC<CommentsPropsType> = memo(({newsId}) => {

  const comments = useSelector(commentsNewsSelector)
  const dispatch = useAppDispatch()

  useEffectOnce(() => {
    if (newsId === 0) return // чем заменить useEffect ?
    dispatch(getCommentsNewsTC(newsId))
  })

  const removeComment = useCallback((commentId: number) => {
    dispatch(removeCommentTC(commentId))
  }, [dispatch])

  const addComment = useCallback((comment: CommentFormType) => {
    dispatch(addCommentTC({...comment, news_id: newsId}))
  }, [dispatch, newsId])

  return (
    <div className={style.container}>
      Comments:
      {comments.map((comment) => {
        return <Comment key={comment.id}
                        comment={comment}
                        removeComment={removeComment}/>
      })}
      <CommentForm addComment={addComment}/>
    </div>
  );
});
