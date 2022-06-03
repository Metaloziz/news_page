import { FC } from 'react'

import { DeleteButton } from 'components'
import style from 'pages/CreateSectionPage/Section/Section.module.scss'
import { SectionType } from 'store/types'
import { isProtectedSection } from 'utils/is_protected_section'

type SectionPropsType = {
  section: SectionType
  deleteSection: (id: number) => void
}
export const Section: FC<SectionPropsType> = ({
  section: { id, name },
  deleteSection,
}) => (
  <div>
    <div className={style.container}>
      <div>
        <span>
          {id} - {name}
        </span>
      </div>
      <DeleteButton
        disabled={!isProtectedSection(id)}
        name="удалить"
        onClick={() => deleteSection(id)}
      />
    </div>
  </div>
)
