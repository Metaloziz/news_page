import fire from 'assets/images/common/fire.svg'
import about from 'assets/images/menu/about.svg'
import blog from 'assets/images/menu/blog.svg'
import courses from 'assets/images/menu/courses.svg'
import library from 'assets/images/menu/library.svg'
import main from 'assets/images/menu/main.svg'
import news from 'assets/images/menu/news.svg'
import processLeading from 'assets/images/menu/processLeading.svg'
import start from 'assets/images/menu/start.svg'
import startWork from 'assets/images/menu/startWork.svg'
import teacher from 'assets/images/menu/teacher.svg'

export type MenuItemsType = {
  name: string
  link: string
  icon: any
  fire?: string
}

const BASE_URL = 'https://itec.pythonanywhere.com/'

export const menuNames: MenuItemsType[] = [
  { name: 'Главная', link: `${BASE_URL}`, icon: main },
  { name: 'Католог курсов', link: `${BASE_URL}#catalog`, icon: courses },
  {
    name: 'Процесс обучения',
    link: `${BASE_URL}#learning_process`,
    icon: processLeading,
  },
  { name: 'StartWork', link: `${BASE_URL}#start_work`, icon: startWork, fire },
  {
    name: 'Ближайшие старты групп',
    link: `${BASE_URL}#upcoming_group_starts`,
    icon: start,
    fire,
  },
  { name: 'Преподаватели', link: `${BASE_URL}#our_teachers`, icon: teacher },
  { name: 'Что такое ITEC ?', link: `${BASE_URL}#what_itec`, icon: about },
  { name: 'Библиотека', link: `${BASE_URL}#library`, icon: library },
  { name: 'IT - новости', link: `${BASE_URL}#news`, icon: news },
  { name: 'Блог', link: `${BASE_URL}#blog`, icon: blog },
]
