import { FC } from 'react'

import style from './CoursePreview.module.scss'

import { COURSES_URL } from 'constants/constants'
import { CoursesType } from 'store/types/courses_type'

export const CoursePreview: FC<{ courses: CoursesType }> = ({ courses }) => {
  const bufferDiv = document.createElement('div')
  bufferDiv.innerHTML = courses.description_course
  const text = Array.from(bufferDiv.children).map(el => (
    <li key={el.textContent}>{el.textContent}</li>
  ))
  return (
    <div className={style.container}>
      <a href={COURSES_URL} target="_blank" rel="noreferrer">
        <h2>{courses.name_course}</h2>
        <div>
          <h3>После прохождения курса ты сможешь:</h3>
          <div>{text}</div>
        </div>
        <span>подробнее</span>
      </a>
    </div>
  )
}
