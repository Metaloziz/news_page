import { FC } from 'react'

import style from './CoursePreview.module.scss'

import { CoursesType } from 'api/commonDataRequests'

export const CoursePreview: FC<{ courses: CoursesType }> = ({ courses }) => {
  const bufferDiv = document.createElement('div')
  bufferDiv.innerHTML = courses.description_course
  const text = Array.from(bufferDiv.children).map(el => (
    <li key={el.textContent}>{el.textContent}</li>
  ))
  return (
    <div className={style.container}>
      <h2>{courses.name_course}</h2>
      <div>
        <h3>После прохождения курса ты сможешь:</h3>
        <div>{text}</div>
      </div>
      <span>подробнее</span>
    </div>
  )
}
