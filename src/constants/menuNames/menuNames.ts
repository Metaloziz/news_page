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

export const menuNames: MenuItemsType[] = [
  { name: 'Главная', link: '', icon: main },
  { name: 'Католог курсов', link: '', icon: courses },
  { name: 'Процесс обучения', link: '', icon: processLeading },
  { name: 'StartWork', link: '', icon: startWork, fire },
  { name: 'Ближайшие старты групп', link: '', icon: start, fire },
  { name: 'Преподаватели', link: '', icon: teacher },
  { name: 'Что такое ITEC ?', link: '', icon: about },
  { name: 'Библиотека', link: '', icon: library },
  { name: 'IT - новости', link: '', icon: news },
  { name: 'Блог', link: '', icon: blog },
]
