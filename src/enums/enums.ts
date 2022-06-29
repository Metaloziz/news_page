export enum ButtonsPagination {
  Zero,
  One,
  Two,
  Three,
  Four,
}

export enum Path {
  DEFAULT = '/',
  MAIN = '/main',
  CURRENT_NEWS = '/current_news',
  CREATE_NEWS = '/create_news',
  CHANGE_NEWS = '/change_news',
  CREATE_SECTION = '/create_section',

  LOGIN = '/login',
  REGISTRATION = '/registration',
  EDIT_PASSWORD = '/edit_password',
}

export enum RequestSource {
  NEWS = '/news',
  COMMENTS = '/comments',
  SECTIONS = '/sections',
  SEARCH = 'search',
  POPULAR = 'popular',
}

export enum RequestLogin {
  LOGIN = 'login',
  LOGOUT = 'logout',
  REGISTRATION = 'registration',
}

export enum RequestCommonData {
  COURSE = 'course/',
  CONTACT = 'contact/',
}

export enum StatusCode {
  SUCCESS = 204,
  POST_NEWS_SUCCESS = 201,
  GET_NEWS_SUCCESS = 200,
  UPDATE_NEWS_SUCCESS = 204,

  GET_COURSES_SUCCESS = 200,
  GET_CONTACTS_SUCCESS = 200,

  LOGIN_SUCCESS = 200,
  LOGOUT_SUCCESS = 200,
  REGISTRATION_SUCCESS = 201,
}

export enum DeBounceTimer {
  SEARCH_DELAY = 1500,
  CLOSE_ERROR = 3000,
}

export enum Error {
  EMPTY_NEWS = 'нету новостей',
  PROTECT_SECTION = 'нельзя редактировтаь',
}
