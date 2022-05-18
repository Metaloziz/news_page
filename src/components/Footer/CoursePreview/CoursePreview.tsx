import { FC } from 'react'

import style from './CoursePreview.module.scss'

export const CoursePreview: FC = () => (
  <div className={style.container}>
    <h1>Курсы по JS</h1>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus commodi
      dignissimos doloribus id ipsa molestias necessitatibus praesentium, quisquam quos!
      At delectus deserunt dolor, ducimus in maxime placeat porro sint!
    </div>
    <span>подробнее</span>
  </div>
)
