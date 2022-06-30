import { instance } from 'api/instance'
import { RequestSource } from 'enums/enums'
import { SectionType } from 'store/types'

export const sectionsRequests = {
  getSections: () => instance.get<{ Data: SectionType[] }>(`${RequestSource.SECTIONS}/`),

  postSection: (name: string, token: string) =>
    instance.post<{ id: number }>(
      `${RequestSource.SECTIONS}/`,
      { name },
      {
        headers: {
          Authorization: token,
        },
      },
    ),

  deleteSection: (id: number, token: string) =>
    instance.delete<{ id: number }>(`${RequestSource.SECTIONS}/${id}`, {
      headers: {
        Authorization: token,
      },
    }),

  changeSection: ({ id, name }: SectionType, token: string) =>
    instance.put(
      `${RequestSource.SECTIONS}/${id}`,
      { name },
      {
        headers: {
          Authorization: token,
        },
      },
    ),
}
