import { sectionsReducer, setCurrentSectionAC } from 'store/reducers/index'
import {
  changeSectionTC,
  deleteSectionTC,
  getSectionsTC,
  postSectionsTC,
} from 'store/thunks'
import { SectionsInitialStateType, SectionType } from 'store/types'

let sections: SectionType[]
let newSection: SectionType
let changedSection: SectionType

let initialState: SectionsInitialStateType

const sectionId: number = 1
const FIRST_ITEM: number = 0

beforeEach(() => {
  initialState = {
    sections: [{ id: 0, name: 'все' }],
    defaultSection: { id: 0, name: 'все' },
    activeSectionId: 0,
  }

  changedSection = { id: 0, name: 'new name' }

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

    expect(endState.sections.length).toBe(initialState.sections.length + sections.length)
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

  test('should set active section ID', () => {
    const action = setCurrentSectionAC(sectionId)

    const endState = sectionsReducer(initialState, action)

    expect(endState.activeSectionId).toBe(sectionId)
  })

  test('should change section', () => {
    const action = changeSectionTC.fulfilled(changedSection, '', changedSection)

    const endState = sectionsReducer(initialState, action)

    expect(endState.sections[FIRST_ITEM].name).toBe(changedSection.name)
  })
})
