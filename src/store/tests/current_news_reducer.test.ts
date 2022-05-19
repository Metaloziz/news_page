import { currentNewsReducer, setCurrentNewsAC } from 'store/reducers'
import { CurrentNewsInitialStateType, NewsType } from 'store/types'

let currentNewsInitialState: CurrentNewsInitialStateType
let newNews: NewsType

beforeEach(() => {
  currentNewsInitialState = {
    currentNews: {
      id: 0,
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

describe('current news reducer', () => {
  test('should add one news to state', () => {
    const action = setCurrentNewsAC(newNews)

    const endState = currentNewsReducer(currentNewsInitialState, action)

    expect(endState.currentNews).toBe(newNews)
  })
})
