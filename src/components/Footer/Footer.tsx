import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { CoursePreview } from './CoursePreview/CoursePreview'
import style from './Footer.module.scss'

import { FIRST_ARRAY_ITEM, SECOND_ARRAY_ITEM } from 'constants/constants'
import { selectIsCourses } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { getCoursesTC } from 'store/thunks'

export const Footer: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCoursesTC())
  }, [])

  const courses = useSelector(selectIsCourses)

  // todo теперь с сервера приходит только одно описание
  return (
    <div>
      <div className={style.container}>
        <CoursePreview courses={courses[FIRST_ARRAY_ITEM]} />
        <CoursePreview courses={courses[FIRST_ARRAY_ITEM]} />
      </div>
    </div>
  )
}
