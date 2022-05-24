import { FC, useEffect, useRef, useState, KeyboardEvent } from 'react'

import style from './Select.module.scss'

import arrow from 'assets/images/common/arrow.svg'
import { SectionButton } from 'components/SectionButton/SectionButton'
import { SectionType } from 'store/types'
import { findIndexElement } from 'utils/utils'

type SelectType = {
  sections: SectionType[]
  activeSectionId: number
  handleCurrentCount: (value: number) => void
}

const NEX_PREVIOUS_ITEM = 1

export const Select: FC<SelectType> = ({
  sections,
  activeSectionId,
  handleCurrentCount,
}) => {
  const defaultSection: SectionType = { id: -1, name: 'новости по темам' }

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<SectionType>(defaultSection)

  useEffect(() => {
    if (activeSectionId !== activeSection.id) {
      setActiveSection(defaultSection)
    }
  }, [activeSectionId])

  const divLink = useRef<HTMLDivElement>(null)

  document.onclick = event => {
    if (!divLink.current!.contains(event.target as Node)) {
      setIsCollapsed(false)
    }
  }

  const handleViewSelector = (): void => setIsCollapsed(!isCollapsed)

  const setCurrentCount = (sectionId: number): void => {
    const activeSectionIndex = findIndexElement(sections, sectionId)
    handleCurrentCount(sectionId)
    setActiveSection(sections[activeSectionIndex])
    setIsCollapsed(!isCollapsed)
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
    const activeSectionIndex = findIndexElement(sections, activeSection.id)

    switch (e.key) {
      case 'ArrowDown':
        setIsCollapsed(true)
        if (sections[activeSectionIndex + NEX_PREVIOUS_ITEM]) {
          setActiveSection(sections[activeSectionIndex + NEX_PREVIOUS_ITEM])
        }
        break
      case 'ArrowUp':
        setIsCollapsed(true)
        if (sections[activeSectionIndex - NEX_PREVIOUS_ITEM]) {
          setActiveSection(sections[activeSectionIndex - NEX_PREVIOUS_ITEM])
        }
        break
      case 'Enter':
        setIsCollapsed(false)
        handleCurrentCount(activeSection.id)
        break
      case 'Escape':
        setIsCollapsed(false)
        setActiveSection(activeSection)
        break
      default:
    }
  }

  const selectElements = sections.map(section => (
    <div
      key={section.id}
      tabIndex={-1}
      role="button"
      onClick={() => setCurrentCount(section.id)}
    >
      <SectionButton isActive={section.id === activeSectionId} name={section.name} />
    </div>
  ))

  return (
    <div
      className={style.container}
      role="button"
      tabIndex={0}
      ref={divLink}
      id="select"
      onKeyUp={onKeyUp}
    >
      <div className={`${style.items} ${isCollapsed ? style.active : ''}`}>
        {isCollapsed && selectElements}
      </div>
      <div
        tabIndex={-2}
        role="button"
        className={style.title}
        onClick={handleViewSelector}
      >
        <SectionButton
          isActive={activeSection.id === activeSectionId}
          name={activeSection.name}
        />
        <img alt="arrow" src={arrow} className={`${isCollapsed && style.active}`} />
      </div>
    </div>
  )
}
