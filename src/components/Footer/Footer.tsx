import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Footer.module.scss'

import { CoursePreview } from 'components/Footer/CoursePreview/CoursePreview'
import { FIRST_ARRAY_ITEM, SECOND_ARRAY_ITEM } from 'constants/constants'
import { selectIsCourses } from 'store/selectors'

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
