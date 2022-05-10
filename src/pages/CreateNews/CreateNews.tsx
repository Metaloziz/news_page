import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {NewsPayloadType} from "api/data";
import {Button} from "components/Button/Button";
import style from './CreateNews.module.scss'
import {useAppDispatch} from "store/store";
import {createNewsTC} from "store/thunks/news_thunks";

export const CreateNews = () => {

  const dispatch = useAppDispatch()

  const {register, handleSubmit, formState: {errors}} = useForm<NewsPayloadType>();
  const onSubmit: SubmitHandler<NewsPayloadType> = (data) => {

    data.section = Number(data.section)

    dispatch(createNewsTC(data))
    console.log(data)
  }

  const date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()

  return (
    <div className={style.container}>
      Создать новость:
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>section </label>
          <select defaultValue={1} {...register("section")}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label>date </label>
          <input {...register("date")} placeholder={'date'} value={date}/>
          {errors.date && <span>This field is required</span>}
        </div>
        <div>
          <label>name </label>
          <input {...register("name")} placeholder={'name'} required value={'test'}/>
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>subtitle_1 </label>
          <input {...register("subtitle_1")} placeholder={'subtitle_1'} required
                 value={'test'}/>
          {errors.subtitle_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>full_text_1 </label>
          <input {...register("full_text_1")} placeholder={'full_text_1'} required
                 value={'test'}/>
          {errors.full_text_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>image_1 </label>
          <input {...register("image_1")} placeholder={'image_1'} value={'test'}/>
          {errors.image_1 && <span>This field is required</span>}
        </div>
        <Button name={'отправить'} type={"submit"}/>
      </form>
    </div>
  );
};
