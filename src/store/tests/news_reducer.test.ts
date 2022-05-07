import {
  getNewsAC, getNewsTC,
  NewsInitialStateType, news_reducer,
} from "store/news_reducer";
import {NewsType} from "api/data";
import {
  pagination_reducer,
  PaginationInitialStateType
} from "store/pagination_reducer";

let NewsData: NewsType[]
let paginationInitialState: PaginationInitialStateType
let firstItem: number = 0
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
})


const newsInitialState: NewsInitialStateType = {
  news: []
}

describe('news page', () => {
  test('set all news', () => {

    const action = getNewsAC(NewsData)

    const endState = news_reducer(newsInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(endState.news.length).toBe(NewsData.length)
    expect(endState.news[firstItem]).toBe(NewsData[firstItem])
  })

  test('set data about news to the pagination', () => {
    const action = getNewsTC.fulfilled(NewsData, '')

    const endState = pagination_reducer(paginationInitialState, action)

    expect(newsInitialState).not.toBe(endState)
    expect(endState.totalCountNews).toBe(NewsData.length)
  })

})
