import axios from "axios";
import {NewsType, NewsPayloadType} from "api/data";
import {RequestSource} from "utils/enums";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})


export const appRequest = {
  getAllNews: () => instance.get<NewsType[]>(RequestSource.DATA),
  createNews: (newNews: NewsPayloadType) => instance.post<{ id: number }>('/news', newNews),
  deleteNews: (newsId: number) => instance.delete<{ id: number }>(`/news/${newsId}`),
}
