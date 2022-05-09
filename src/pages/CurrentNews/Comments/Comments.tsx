import React, {FC, memo} from 'react';
import style from "./Comments.module.scss";
import {useSelector} from "react-redux";
import {commentsNewsSelector} from "utils/selectors/selectors";
import {useAppDispatch} from "store/store";
import {getCommentsNewsTC, removeCommentsAC} from "store/news_reducer";
import {useEffectOnce} from "utils/hooks/hooks";


type CommentsPropsType = {
  newsId: number
}

export const Comments: FC<CommentsPropsType> = memo(({newsId}) => {


  const comments = useSelector(commentsNewsSelector)
  const dispatch = useAppDispatch()

  useEffectOnce(() => {

    if (newsId === 0) return

    dispatch(getCommentsNewsTC(newsId))

    return () => dispatch(removeCommentsAC())

  })


  return (
    <div className={style.container}>
      Comments:
      {comments.map((comment) => {
        return <div className={style.comment} key={comment.id}>
          <div><h3>author: </h3>{comment.author}</div>
          <div><h4>text: </h4>{comment.text}</div>
          <div><h5>date: </h5>{comment.date}</div>
        </div>
      })}
    </div>
  );
});
