export type NewsType = {
  id: number
  name: string
  subtitle_1: string
  subtitle_2?: string
  subtitle_3?: string
  image_1: string
  image_2?: string
  image_3?: string
  full_text_1: string
  full_text_2?: string
  full_text_3?: string
  link: string
  date: string
  views: number
  section: number
}
export type NewsBodyType = {
  name: string
  subtitle_1: string
  subtitle_2?: string
  subtitle_3?: string
  full_text_1: string
  full_text_2?: string
  full_text_3?: string
  section: number
  date: string
  image_1: string
  image_2?: string
  image_3?: string
}
export type NewsFileType = {
  file: File
}
export type FormType = NewsBodyType & NewsFileType
