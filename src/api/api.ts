import axios from "axios";
import {NewsPayloadType, NewsType} from "api/data";
import {RequestSource} from "utils/enums";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  }
})

export const appRequest = {
  getAllNews: () => instance.get<{ Data: NewsType[] }>(RequestSource.NEWS),
  createNews: (newNews: NewsPayloadType) => instance.post<{ id: number }>('/news', newNews),
  deleteNews: (newsId: number) => instance.delete<{ id: number }>(`/news/${newsId}`),
}
