import {
  getNewsAC,
  getNewsPartTC,
  NewsInitialStateType,
  news_reducer,
  setCurrentNewsAC,
  getCommentsNewsTC,
  CommentType, removeCommentsAC,
} from "store/news_reducer";
import {NewsType} from "api/data";
import {
  pagination_reducer,
  PaginationInitialStateType
} from "store/pagination_reducer";

let NewsData: NewsType[]
let paginationInitialState: PaginationInitialStateType
let firstItem: number = 0
let currentNewsId: number = 10
let pageNumber: number = 1
let comments: CommentType[]
beforeEach(() => {
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
      views: 11
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
      views: 11
    },
  ]

  paginationInitialState = {
    countNewsOnPage: 1,
    totalCountNews: 1,
    currentPage: 1
  }

  comments = [
    {
      id: 0,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 0
    }, {
      id: 1,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 2
    }
  ]
})


const newsInitialState: NewsInitialStateType = {
  news: [{
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
    views: 0
  }],
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
    views: 0
  },
  comments: [
    {
      id: 0,
      author: '',
      text: '',
      date: '',
      news_id: 0
    }
  ]
}

describe('news reducer', () => {
  test('set all news', () => {

    const action = getNewsAC(NewsData)

    const endState = news_reducer(newsInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(endState.news.length).toBe(NewsData.length)
    expect(endState.news[firstItem]).toBe(NewsData[firstItem])
  })

  test('set data about news to the pagination', () => {
    const action = getNewsPartTC.fulfilled(NewsData, '', pageNumber)

    const endState = pagination_reducer(paginationInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(endState.totalCountNews).toBe(NewsData.length)
  })

  test('set current news', () => {

    const currentNews = newsInitialState.news.find(item => item.id === currentNewsId)

    const action = setCurrentNewsAC(currentNewsId)

    const endState = news_reducer(newsInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(endState.currentNews).toBe(currentNews)
    expect(endState.currentNews.id).toBe(currentNewsId)
  })

  test('set news comments', () => {

    const action = getCommentsNewsTC.fulfilled(comments, '', 1)

    const endState = news_reducer(newsInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(endState.comments).toBe(comments)

  })

  test('remove comments', () => {

    const action = removeCommentsAC()
    const endState = news_reducer(newsInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(!!endState.comments.length).toBeTruthy()
  })
})
