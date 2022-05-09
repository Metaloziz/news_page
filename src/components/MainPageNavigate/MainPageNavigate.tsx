import React from 'react';
import {Button} from "components/Button/Button";
import {useNavigate} from "react-router-dom";
import {Paths} from "utils/enums";

export const MainPageNavigate = () => {

  const navigate = useNavigate();

  const newsHandler = () => {
    navigate(`/${Paths.MAIN}`);
  }

  return (
    <Button name={'назад'} onClick={newsHandler}/>
  );
};
