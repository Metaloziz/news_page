import axios from "axios";
import {NewsPayloadType, NewsType} from "api/data";
import {newsOnPage} from "utils/consts";
import {RequestSource} from "utils/enums/enums";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  }
})


export const appRequest = {
  getNewsPart: (pageNumber: number) => instance.get<{ Data: NewsType[] }>(`${RequestSource.NEWS}?page=${pageNumber}&limit=${newsOnPage}`),
  createNews: (newNews: NewsPayloadType) => instance.post<{ id: number }>('/news', newNews),
  deleteNews: (newsId: number) => instance.delete<{ id: number }>(`/news/${newsId}`),
}
