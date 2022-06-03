import {
  PaginationInitialStateType,
  paginationReducer,
  sectionNewsReducer,
} from 'store/reducers/index'
import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsByIdTC,
  getNewsPartTC,
} from 'store/thunks'
import { SectionNewsInitialStateType, NewsType } from 'store/types'
import { findElement, findIndexElement } from 'utils/findIndex_element'

const firstItem: number = 0
const currentNewsId: number = 10
const pageNumber: number = 1
const countViewsSeparator: number = 1
let paginationInitialState: PaginationInitialStateType
let sectionNewsInitialState: SectionNewsInitialStateType
let newsData: NewsType[]
let newNews: NewsType

beforeEach(() => {
  sectionNewsInitialState = {
    news: [
      {
        id: currentNewsId,
        name: '',
        subtitle_1: '',
        full_text_1: '',
        image_1: '',
        subtitle_2: '',
        full_text_2: '',
        image_2: '',
        full_text_3: '',
        image_3: '',
        link: '',
        date: '',
        subtitle_3: '',
        section: 0,
        views: 0,
      },
    ],
  }

  newsData = [
    {
      id: 1,
      name: 'JS',
      subtitle_1: 'text',
      full_text_1: 'text',
      image_1: 'img',
      subtitle_2: 'text',
      full_text_2: 'text',
      image_2: 'img',
      full_text_3: 'text',
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
      full_text_1: 'text',
      image_1: 'img',
      subtitle_2: 'text',
      full_text_2: 'text',
      image_2: 'img',
      full_text_3: 'text',
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
    full_text_1: 'text',
    image_1: 'img',
    subtitle_2: 'text',
    full_text_2: 'text',
    image_2: 'img',
    full_text_3: 'text',
    image_3: 'img',
    link: 'some link',
    date: '9 November 2016 16:16:02 GMT',
    subtitle_3: 'text',
    section: 1,
    views: 11,
  }
})

describe('section news reducer', () => {
  test('should set all news', () => {
    const action = getNewsPartTC.fulfilled(newsData, '', pageNumber)

    const endState = sectionNewsReducer(sectionNewsInitialState, action)

    expect(endState.news.length).toBe(newsData.length)
    expect(endState.news[firstItem]).toBe(newsData[firstItem])
  })

  test('should set data about news to the pagination', () => {
    const action = getNewsPartTC.fulfilled(newsData, '', pageNumber)

    const endState = paginationReducer(paginationInitialState, action)

    expect(endState.totalCountNews).toBe(newsData.length)
  })

  test('should delete current news', () => {
    const action = deleteNewsTC.fulfilled(currentNewsId, '', currentNewsId)

    const endState = sectionNewsReducer(sectionNewsInitialState, action)

    const currentNews = endState.news.find(({ id }) => id === currentNewsId)

    expect(currentNews).toBeUndefined()
  })

  test('should added one count to news view', () => {
    const action = addNewsViewsValueTC.fulfilled(currentNewsId, '', currentNewsId)

    const endState = sectionNewsReducer(sectionNewsInitialState, action)

    const indexElement = findIndexElement(endState.news, currentNewsId)

    expect(endState.news[indexElement].views).toBe(
      sectionNewsInitialState.news[indexElement].views + countViewsSeparator,
    )
  })

  test('should add one news to state', () => {
    const action = getNewsByIdTC.fulfilled(newNews, '', newNews.id)

    const endState = sectionNewsReducer(sectionNewsInitialState, action)

    const news = findElement(endState.news, newNews.id)

    expect(news).toBe(newNews)
  })
})
