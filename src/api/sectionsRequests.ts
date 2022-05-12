import { instance } from 'api/instance'
import { SectionType } from 'store/sections_reducer'
import { RequestSource } from 'utils/enums'

export const sectionsRequests = {
  getSections: () => instance.get<{ Data: SectionType[] }>(`${RequestSource.SECTIONS}/`),

  postSection: (name: string) =>
    instance.post<{ id: number }>(`${RequestSource.SECTIONS}/`, { name }),

  deleteSection: (id: number) =>
    instance.delete<{ id: number }>(`${RequestSource.SECTIONS}/${id}`),

  changeSection: ({ id, name }: SectionType) =>
    instance.put(`${RequestSource.SECTIONS}/${id}`, { name }),
}
