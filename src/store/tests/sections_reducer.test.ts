import {
  SectionsInitialStateType,
  sectionsReducer,
  SectionType,
} from 'store/reducers/sections_reducer'
import {
  deleteSectionTC,
  getSectionsTC,
  postSectionsTC,
} from 'store/thunks/sections_thunks'

let sections: SectionType[]
let newSection: SectionType

let initialState: SectionsInitialStateType

const sectionId: number = 1

beforeEach(() => {
  initialState = {
    sections: [{ id: 0, name: 'все' }],
    defaultSection: { id: 0, name: 'все' },
    activeSectionId: 0,
  }

  sections = [
    { id: 1, name: 'default' },
    { id: 2, name: 'default' },
  ]

  newSection = { id: 10, name: 'asd' }
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

  test('should post new section', () => {
    const action = postSectionsTC.fulfilled(newSection, '', newSection.name)

    const endState = sectionsReducer(initialState, action)

    const currentSection = endState.sections.find(({ id }) => id === newSection.id)

    expect(currentSection).toBe(newSection)
  })
})
