import {
  SectionsInitialStateType,
  sectionsReducer,
  SectionType,
} from 'store/reducers/sections_reducer'
import { deleteSectionTC, getSectionsTC } from 'store/thunks/sections_thunks'

let sections: SectionType[]

let initialState: SectionsInitialStateType

const sectionId: number = 1

beforeEach(() => {
  initialState = {
    sections: [{ id: 0, name: 'default' }],
  }

  sections = [
    { id: 1, name: 'default' },
    { id: 2, name: 'default' },
  ]
})

describe('sections reducer', () => {
  test('should get all sections', () => {
    const action = getSectionsTC.fulfilled(sections, '')

    const endState = sectionsReducer(initialState, action)

    expect(endState.sections).toBe(sections)
  })

  test('should delete current section', () => {
    const action = deleteSectionTC.fulfilled(sectionId, '', sectionId)

    const endState = sectionsReducer(initialState, action)

    const currentSection = endState.sections.find(({ id }) => id === sectionId)

    expect(currentSection).toBeUndefined()
  })
})
