import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Footer.module.scss'

import { CoursePreview } from 'components/Footer/CoursePreview/CoursePreview'
import { selectIsCourses } from 'store/selectors'

export const FIRST_ARRAY_ITEM = 0
export const SECOND_ARRAY_ITEM = 1
export const THIRD_ARRAY_ITEM = 2

export const Footer: FC = () => {
  const courses = useSelector(selectIsCourses)

  return (
    <div>
      <div className={style.container}>
        <CoursePreview courses={courses[FIRST_ARRAY_ITEM]} />
        <CoursePreview courses={courses[SECOND_ARRAY_ITEM]} />
      </div>
    </div>
  )
}
