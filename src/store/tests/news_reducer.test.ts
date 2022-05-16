import {
  NewsInitialStateType,
  newsReducer,
  setCurrentNewsAC,
} from 'store/reducers/news_reducer'
import {
  PaginationInitialStateType,
  paginationReducer,
} from 'store/reducers/pagination_reducer'
import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsByIdTC,
  getNewsPartTC,
} from 'store/thunks/news_thunks'
import { NewsType } from 'store/types/types'
import { findIndexElement } from 'utils/utils'

const firstItem: number = 0
const currentNewsId: number = 10
const pageNumber: number = 1
const countViewsSeparator: number = 1
let paginationInitialState: PaginationInitialStateType
let newsInitialState: NewsInitialStateType
let newsData: NewsType[]
let newNews: NewsType

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
    // comments: [
    //   {
    //     id: 0,
    //     author: '',
    //     text: '',
    //     date: '',
    //     news_id: 0,
    //   },
    //   {
    //     id: currentCommentId,
    //     author: '',
    //     text: '',
    //     date: '',
    //     news_id: 1,
    //   },
    // ],
  }

  newsData = [
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

  newNews = {
    id: 100,
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
  }
})

describe('news reducer', () => {
  test('should set all news', () => {
    const action = getNewsPartTC.fulfilled(newsData, '', pageNumber)

    const endState = newsReducer(newsInitialState, action)

    expect(endState.news.length).toBe(newsData.length)
    expect(endState.news[firstItem]).toBe(newsData[firstItem])
  })

  test('should set data about news to the pagination', () => {
    const action = getNewsPartTC.fulfilled(newsData, '', pageNumber)

    const endState = paginationReducer(paginationInitialState, action)

    expect(endState.totalCountNews).toBe(newsData.length)
  })

  test('should set current news', () => {
    const currentNews = newsInitialState.news.find(item => item.id === currentNewsId)

    const action = setCurrentNewsAC(currentNewsId)

    const endState = newsReducer(newsInitialState, action)

    expect(endState.currentNews).toBe(currentNews)
    expect(endState.currentNews.id).toBe(currentNewsId)
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

  test('should add one news to state', () => {
    const action = getNewsByIdTC.fulfilled(newNews, '', newNews.id)

    const endState = newsReducer(newsInitialState, action)

    const indexElement = findIndexElement(endState.news, newNews.id)

    expect(endState.news[indexElement]).toBe(newNews)
  })
})
