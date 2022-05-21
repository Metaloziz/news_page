import { commentsReducer, removeCommentsAC } from 'store/reducers/index'
import { deleteCommentTC, getCommentsNewsTC, getCurrentCommentTC } from 'store/thunks'
import { CommentsInitialStateType, CommentType } from 'store/types'

const currentNewsId: number = 10
const currentCommentId: number = 1
let commentsInitialState: CommentsInitialStateType
let comments: CommentType[]
let newComment: CommentType

beforeEach(() => {
  commentsInitialState = {
    comments: [
      {
        id: 0,
        author: '',
        text: '',
        date: '',
        news_id: 0,
      },
      {
        id: currentCommentId,
        author: '',
        text: '',
        date: '',
        news_id: 1,
      },
    ],
  }

  comments = [
    {
      id: 0,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 0,
    },
    {
      id: 1,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 2,
    },
  ]

  newComment = {
    id: 2,
    author: 'author',
    text: 'text',
    date: 'date',
    news_id: 0,
  }
})

describe('comments reducer', () => {
  test('should set news comments', () => {
    const action = getCommentsNewsTC.fulfilled(comments, '', currentNewsId)

    const endState = commentsReducer(commentsInitialState, action)

    expect(endState.comments).toBe(comments)
  })

  test('should delete comments', () => {
    const action = removeCommentsAC()
    const endState = commentsReducer(commentsInitialState, action)

    expect(!!endState.comments.length).toBeFalsy()
  })

  test('should delete current comments', () => {
    const action = deleteCommentTC.fulfilled(currentCommentId, '', currentCommentId)

    const endState = commentsReducer(commentsInitialState, action)

    const currentComment = endState.comments.find(({ id }) => id === currentCommentId)

    expect(currentComment).toBeUndefined()
  })

  test('should added current comment', () => {
    const action = getCurrentCommentTC.fulfilled(newComment, '', newComment.id)

    const endState = commentsReducer(commentsInitialState, action)

    const currentComment = endState.comments.find(({ id }) => id === newComment.id)

    expect(!!currentComment).toBeTruthy()
  })
})
