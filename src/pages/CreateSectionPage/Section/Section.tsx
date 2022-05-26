import { FC } from 'react'

import { DeleteButton } from 'components/DeleteButton/DeleteButton'
import style from 'pages/CreateSectionPage/Section/Section.module.scss'
import { SectionType } from 'store/types/section_type'
import { isDisable } from 'utils/utils'

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
        disabled={!isDisable(id)}
        name="удалить"
        onClick={() => deleteSection(id)}
      />
    </div>
  </div>
)
