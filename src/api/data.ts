export type NewsType = {
  id: number;
  name: string;
  subtitle_1: string;
  subtitle_2: string;
  subtitle_3: string;
  image_1: string;
  image_2: string;
  image_3: string;
  fullText_1: string;
  fullText_2: string;
  fullText_3: string;
  link: string;
  date: string;
  views: number;
  section: number;
}

export const image = 'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small/3d-world-news-background-loop-free-video.jpg'


export const NewsData: NewsType[] = [
  {
    id: 1,
    name: 'JS',
    subtitle_1: 'text',
    fullText_1: 'text',
    image_1: image,
    subtitle_2: 'text',
    fullText_2: 'text',
    image_2: 'img',
    fullText_3: 'text',
    image_3: 'img',
    link: 'some link',
    date: '9 November 2016 16:16:02 GMT',
    subtitle_3: 'text',
    section: 1,
    views: 11
  },
  {
    id: 2,
    name: 'TS',
    subtitle_1: 'text',
    fullText_1: 'text',
    image_1: image,
    subtitle_2: 'text',
    fullText_2: 'text',
    image_2: 'img',
    fullText_3: 'text',
    image_3: 'img',
    link: 'some link',
    date: '9 November 2016 16:16:02 GMT',
    subtitle_3: 'text',
    section: 1,
    views: 11
  },
  {
    id: 3,
    name: 'SCSS',
    subtitle_1: 'text',
    fullText_1: 'text',
    image_1: image,
    subtitle_2: 'text',
    fullText_2: 'text',
    image_2: 'img',
    fullText_3: 'text',
    image_3: 'img',
    link: 'some link',
    date: '9 November 2016 16:16:02 GMT',
    subtitle_3: 'text',
    section: 1,
    views: 11
  },
]


export type NewsPayloadType = {
  name: string
  subtitle_1: string
  full_text_1: string
  subtitle_2?: string
  full_text_2?: string
  subtitle_3?: string
  full_text_3?: string
  section: number
  // file?: any // need change
  date: string
  image_1: string
}