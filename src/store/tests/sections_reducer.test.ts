import {
  SectionsInitialStateType,
  sectionsReducer,
  SectionType,
} from 'store/reducers/sections_reducer'
import { getSectionsTC } from 'store/thunks/sections_thunks'

let sections: SectionType[]

let initialState: SectionsInitialStateType

beforeEach(() => {
  initialState = {
    sections: [],
  }

  sections = [
    { id: 0, name: 'default' },
    { id: 1, name: 'default' },
  ]
})

describe('sections reducer', () => {
  test('should get all sections', () => {
    const action = getSectionsTC.fulfilled(sections, '')

    const endState = sectionsReducer(initialState, action)

    expect(endState).not.toBe(initialState)
    expect(endState.sections).toBe(sections)
  })
})
