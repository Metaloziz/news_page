import { FC } from 'react'

import style from './CoursePreview.module.scss'

import { CoursesData } from 'api/commonDataRequests'

export const CoursePreview: FC<{ courses: CoursesData }> = ({ courses }) => (
  <div className={style.container}>
    <h1>{courses.name_course}</h1>
    <div>{courses.description_course}</div>
    <span>подробнее</span>
  </div>
)
