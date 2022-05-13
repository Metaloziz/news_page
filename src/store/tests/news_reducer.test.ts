import {
  CommentType,
  NewsInitialStateType,
  newsReducer,
  removeCommentsAC,
  setCurrentNewsAC,
} from 'store/reducers/news_reducer'
import {
  PaginationInitialStateType,
  paginationReducer,
} from 'store/reducers/pagination_reducer'
import {
  deleteCommentTC,
  getCommentsNewsTC,
  getCurrentCommentTC,
} from 'store/thunks/comments_thunks'
import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsPartTC,
} from 'store/thunks/news_thunks'
import { NewsType } from 'store/types/types'
import { findIndexElement } from 'utils/utils'

const firstItem: number = 0
const currentNewsId: number = 10
const currentCommentId: number = 1
const pageNumber: number = 1
const countViewsSeparator: number = 1
let paginationInitialState: PaginationInitialStateType
let newsInitialState: NewsInitialStateType
let NewsData: NewsType[]
let comments: CommentType[]
let newComment: CommentType

beforeEach(() => {
  newsInitialState = {
    news: [
      {
        id: currentNewsId,
        name: '',
        subtitle_1: '',
        fullText_1: '',
        image_1: '',
        subtitle_2: '',
        fullText_2: '',
        image_2: '',
        fullText_3: '',
        image_3: '',
        link: '',
        date: '',
        subtitle_3: '',
        section: 0,
        views: 0,
      },
    ],
    currentNews: {
      id: 0,
      name: '',
      subtitle_1: '',
      fullText_1: '',
      image_1: '',
      subtitle_2: '',
      fullText_2: '',
      image_2: '',
      fullText_3: '',
      image_3: '',
      link: '',
      date: '',
      subtitle_3: '',
      section: 0,
      views: 0,
    },
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

  NewsData = [
    {
      id: 1,
      name: 'JS',
      subtitle_1: 'text',
      fullText_1: 'text',
      image_1: 'img',
      subtitle_2: 'text',
      fullText_2: 'text',
      image_2: 'img',
      fullText_3: 'text',
      image_3: 'img',
      link: 'some link',
      date: '9 November 2016 16:16:02 GMT',
      subtitle_3: 'text',
      section: 1,
      views: 11,
    },
    {
      id: 2,
      name: 'TS',
      subtitle_1: 'text',
      fullText_1: 'text',
      image_1: 'img',
      subtitle_2: 'text',
      fullText_2: 'text',
      image_2: 'img',
      fullText_3: 'text',
      image_3: 'img',
      link: 'some link',
      date: '9 November 2016 16:16:02 GMT',
      subtitle_3: 'text',
      section: 1,
      views: 11,
    },
  ]

  paginationInitialState = {
    countNewsOnPage: 1,
    totalCountNews: 1,
    currentPage: 1,
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

describe('news reducer', () => {
  test('should set all news', () => {
    const action = getNewsPartTC.fulfilled(NewsData, '', pageNumber)

    const endState = newsReducer(newsInitialState, action)

    expect(endState.news.length).toBe(NewsData.length)
    expect(endState.news[firstItem]).toBe(NewsData[firstItem])
  })

  test('should set data about news to the pagination', () => {
    const action = getNewsPartTC.fulfilled(NewsData, '', pageNumber)

    const endState = paginationReducer(paginationInitialState, action)

    expect(endState.totalCountNews).toBe(NewsData.length)
  })

  test('should set current news', () => {
    const currentNews = newsInitialState.news.find(item => item.id === currentNewsId)

    const action = setCurrentNewsAC(currentNewsId)

    const endState = newsReducer(newsInitialState, action)

    expect(endState.currentNews).toBe(currentNews)
    expect(endState.currentNews.id).toBe(currentNewsId)
  })

  test('should set news comments', () => {
    const action = getCommentsNewsTC.fulfilled(comments, '', currentNewsId)

    const endState = newsReducer(newsInitialState, action)

    expect(endState.comments).toBe(comments)
  })

  test('should delete comments', () => {
    const action = removeCommentsAC()
    const endState = newsReducer(newsInitialState, action)

    expect(!!endState.comments.length).toBeFalsy()
  })

  test('should delete current comments', () => {
    const action = deleteCommentTC.fulfilled(currentCommentId, '', currentCommentId)

    const endState = newsReducer(newsInitialState, action)

    const currentComment = endState.comments.find(({ id }) => id === currentCommentId)

    expect(currentComment).toBeUndefined()
  })

  test('should added current comment', () => {
    const action = getCurrentCommentTC.fulfilled(newComment, '', newComment.id)

    const endState = newsReducer(newsInitialState, action)

    const currentComment = endState.comments.find(({ id }) => id === newComment.id)

    expect(!!currentComment).toBeTruthy()
  })

  test('should delete current news', () => {
    const action = deleteNewsTC.fulfilled(currentNewsId, '', currentNewsId)

    const endState = newsReducer(newsInitialState, action)

    const currentNews = endState.news.find(({ id }) => id === currentNewsId)

    expect(currentNews).toBeUndefined()
  })

  test('should added one count to news view', () => {
    const action = addNewsViewsValueTC.fulfilled(currentNewsId, '', currentNewsId)

    const endState = newsReducer(newsInitialState, action)

    const indexElement = findIndexElement(endState.news, currentNewsId)

    expect(endState.news[indexElement].views).toBe(
      newsInitialState.news[indexElement].views + countViewsSeparator,
    )
  })
})
