export enum ButtonsPagination {
  Zero,
  One,
  Two,
  Three,
  Four,
}

export enum Path {
  DEFAULT = '/',
  MAIN = 'main',
  CURRENT_NEWS = 'current_news',
  CREATE_NEWS = 'create_news',
  CREATE_SECTION = 'create_section',
}

export enum RequestSource {
  NEWS = '/news',
  COMMENTS = '/comments',
  SECTIONS = '/sections',
  SEARCH = 'search',
}

export enum StatusCode {
  SUCCESS = 204,
  POST_NEWS_SUCCESS = 201,
  GET_NEWS_BY_ID_SUCCESS = 200,
}

export enum DeBounceTimer {
  SEARCH_DELAY = 1500,
  CLOSE_ERROR = 5000,
}
