import { FC } from 'react'

import style from './Footer.module.scss'

import { CoursePreview } from 'components/Footer/CoursePreview/CoursePreview'

export const Footer: FC = () => (
  <div>
    <div className={style.container}>
      <CoursePreview />
      <CoursePreview />
    </div>
  </div>
)
