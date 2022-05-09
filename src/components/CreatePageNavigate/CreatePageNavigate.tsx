import React from 'react';
import {useNavigate} from "react-router-dom";
import {Paths} from "utils/enums";
import {Button} from "components/Button/Button";

export const CreatePageNavigate = () => {

  const navigate = useNavigate();

  const newsHandler = () => {
    navigate(`/${Paths.CREATE_NEWS}`);
  }

  return (
    <Button name={'создать новость'} onClick={newsHandler}/>
  );
};
