import { FC } from 'react'

import { Button } from 'components/Button/Button'
import style from 'pages/CreateSectionPage/Section/Section.module.scss'
import { SectionType } from 'store/types/section_type'

type SectionPropsType = {
  section: SectionType
  deleteSection: (id: number) => void
}
export const Section: FC<SectionPropsType> = ({
  section: { id, name },
  deleteSection,
}) => (
  <div className={style.container}>
    <div>{id}</div>
    <div>{name}</div>
    <Button name="удалить" onClick={() => deleteSection(id)} />
  </div>
)
