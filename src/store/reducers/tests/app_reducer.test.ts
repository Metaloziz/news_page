import { CoursesData } from 'api/commonDataRequests'
import { NEWS_BY_SEARCHING, NEWS_BY_SECTIONS } from 'constants/constants'
import {
  appReducer,
  changeIsAdminModeAC,
  changeNewsTypeViewAC,
  setErrorFalseAC,
  setErrorTrueAC,
} from 'store/reducers/index'
import { getCoursesTC } from 'store/thunks/app_thunks'
import { InitialAppStateType } from 'store/types'

let appInitialState: InitialAppStateType
let errorMessage: string
let isAdmin: boolean
let newCourses: CoursesData[]

beforeEach(() => {
  appInitialState = {
    isError: false,
    errorMessage: '',
    newsModeView: NEWS_BY_SECTIONS,
    isAdmin: false,
    courses: [],
  }

  isAdmin = true

  errorMessage = 'some error'

  newCourses = [
    { name_course: 'qwe', description_course: 'qwe' },
    { name_course: 'qwe', description_course: 'qwe' },
  ]
})

describe('app reducer', () => {
  test('should set error message', () => {
    const action = setErrorTrueAC(errorMessage)

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeTruthy()
    expect(endState.errorMessage).toBe(errorMessage)
  })

  test('should set default error message', () => {
    const action = setErrorTrueAC('')

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeTruthy()
  })

  test('should set error false', () => {
    const action = setErrorFalseAC()

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeFalsy()
    expect(endState.errorMessage).toBe(appInitialState.errorMessage)
  })

  test('should change view mod', () => {
    const action = changeNewsTypeViewAC(NEWS_BY_SEARCHING)

    const endState = appReducer(appInitialState, action)

    expect(endState.newsModeView).toBe(NEWS_BY_SEARCHING)
  })

  test('should set admin mod', () => {
    const action = changeIsAdminModeAC(isAdmin)

    const endState = appReducer(appInitialState, action)

    expect(endState.isAdmin).toBe(isAdmin)
  })

  test('should set courses', () => {
    const action = getCoursesTC.fulfilled(newCourses, '')

    const endState = appReducer(appInitialState, action)

    expect(endState.courses).toBe(newCourses)
  })
})
