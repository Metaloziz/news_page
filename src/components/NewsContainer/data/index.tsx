export const image = 'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small/3d-world-news-background-loop-free-video.jpg'

export type NewsType = {
  id: string
  imgAdress: string
  title: string
  description: string
  date: string
  someNumber: number
}


export const newsContainer: NewsType[] = [
  {
    id: '1',
    imgAdress: image,
    title: 'JS',
    description: 'some text',
    date: '11.02.22',
    someNumber: 328
  },
  {
    id: '2',
    imgAdress: image,
    title: 'JS',
    description: 'some text',
    date: '11.02.22',
    someNumber: 328
  },
  {
    id: '3',
    imgAdress: image,
    title: 'JS',
    description: 'some text',
    date: '11.02.22',
    someNumber: 328
  },


]