import style from './Navigation.module.scss'
import {SearchButton} from "../SearchButton/SearchButton";


export const paths: string[] = ['Всё', 'Лучшее', 'ITEC', 'Разделы']


export const Navigation = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>{
        paths.map((path) => {
          return <div key={path} className={style.path}>{path}</div>
        })
      }
      </div>
      <SearchButton/>
    </div>
  );
};
