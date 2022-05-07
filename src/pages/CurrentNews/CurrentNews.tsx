import {FC} from "react";
import {useSelector} from "react-redux";
import {currentNewsSelector} from "utils/selectors/selectors";


export const CurrentNews: FC = () => {

  const news = useSelector(currentNewsSelector)

  return (
    <div>
      <img alt={'logo'} src={news.image_1}/>
      <h1>{news.name}</h1>
      <div>{news.fullText_1}</div>
    </div>
  );
};
