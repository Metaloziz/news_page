import { FC } from 'react'

import style from './PageLoader.module.scss'

export const PageLoader: FC = () => (
  <div className={style.container}>
    <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50" />
    </svg>
  </div>
)
