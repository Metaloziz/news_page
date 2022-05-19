import { NEWS_ON_PAGE } from 'constants/constants'
import {
  searchNewsReducer,
  setNextPageSearchNewsAC,
  setPartSearchNewsAC,
  setPreviewPageSearchNewsAC,
} from 'store/reducers'
import { getNewsByKeyWordTC } from 'store/thunks'
import { SearchNewsInitialStateType } from 'store/types'
import { NewsType } from 'store/types/news_type'

let searchNewsInitialState: SearchNewsInitialStateType
let newsData: NewsType[]
const DIFFERENCE_COUNTER_PAGES: number = 1

beforeEach(() => {
  searchNewsInitialState = {
    news: [],
    partNews: [],
    currentPage: 1,
    pageCount: 1,
    part: {
      firstElementIndex: 0,
      lastElementIndex: NEWS_ON_PAGE,
    },
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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
})

describe('search news reducer', () => {
  test('should set search news', () => {
    const action = getNewsByKeyWordTC.fulfilled(newsData, '', '')

    const endState = searchNewsReducer(searchNewsInitialState, action)
    const pageCount = Math.ceil(newsData.length / NEWS_ON_PAGE)

    expect(endState.news).toBe(newsData)
    expect(endState.partNews.length).toBe(NEWS_ON_PAGE)
    expect(endState.pageCount).toBe(pageCount)
  })

  test('should set next page', () => {
    const action = setNextPageSearchNewsAC()

    const endState = searchNewsReducer(searchNewsInitialState, action)

    expect(endState.currentPage).toBe(
      searchNewsInitialState.currentPage + DIFFERENCE_COUNTER_PAGES,
    )
    expect(endState.part.firstElementIndex).toBe(
      searchNewsInitialState.part.firstElementIndex + NEWS_ON_PAGE,
    )
    expect(endState.part.lastElementIndex).toBe(
      searchNewsInitialState.part.lastElementIndex + NEWS_ON_PAGE,
    )
  })

  test('should set preview page', () => {
    const action = setPreviewPageSearchNewsAC()

    const endState = searchNewsReducer(searchNewsInitialState, action)

    expect(endState.currentPage).toBe(
      searchNewsInitialState.currentPage - DIFFERENCE_COUNTER_PAGES,
    )
    expect(endState.part.firstElementIndex).toBe(
      searchNewsInitialState.part.firstElementIndex - NEWS_ON_PAGE,
    )
    expect(endState.part.lastElementIndex).toBe(
      searchNewsInitialState.part.lastElementIndex - NEWS_ON_PAGE,
    )
  })

  test('should set part news', () => {
    const searchNewsInitialState2 = {
      news: [
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
        {
          id: 3,
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
        {
          id: 4,
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
        {
          id: 5,
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
        {
          id: 6,
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
        {
          id: 7,
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
        {
          id: 8,
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
        {
          id: 9,
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
      ],
      partNews: [],
      currentPage: 1,
      pageCount: 1,
      part: {
        firstElementIndex: 6,
        lastElementIndex: 10,
      },
    }
    const countNews = 3
    const action = setPartSearchNewsAC()

    const endState = searchNewsReducer(searchNewsInitialState2, action)

    expect(endState.partNews.length).toBe(countNews)
  })
})
