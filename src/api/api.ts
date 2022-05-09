import {NewsPayloadType, NewsType} from "api/data";
import {newsOnPage} from "utils/consts";
import {RequestSource} from "utils/enums/enums";
import {instance} from "api/instance";


export const newsRequests = {
  getNewsPart: (pageNumber: number) => instance.get<{ Data: NewsType[] }>(`${RequestSource.NEWS}?page=${pageNumber}&limit=${newsOnPage}`),
  createNews: (newNews: NewsPayloadType) => instance.post<{ id: number }>('/news', newNews),
  deleteNews: (newsId: number) => instance.delete<{ id: number }>(`/news/${newsId}`),
  addNewsViewsValue: (newsId: number) => instance.patch(`/news/${newsId}`),
}
