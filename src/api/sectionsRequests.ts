import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { SectionType } from 'store/reducers/sections_reducer'

export const sectionsRequests = {
  getSections: () => instance.get<{ Data: SectionType[] }>(`${RequestSource.SECTIONS}/`),

  postSection: (name: string) =>
    instance.post<{ id: number }>(`${RequestSource.SECTIONS}/`, { name }),

  deleteSection: (id: number) =>
    instance.delete<{ id: number }>(`${RequestSource.SECTIONS}/${id}`),

  changeSection: ({ id, name }: SectionType) =>
    instance.put(`${RequestSource.SECTIONS}/${id}`, { name }),
}
