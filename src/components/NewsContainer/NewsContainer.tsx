import style from './NewsContainer.module.scss'
import {News} from "./News/News";
import {newsContainer} from "./data";


export const NewsContainer = () => {
  return (
    <div className={style.container}>
      {newsContainer.map(({id, ...news}) => {
        return <News key={id} data={news}/>
      })}
    </div>
  );
};
