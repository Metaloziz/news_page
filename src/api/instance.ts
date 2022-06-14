import axios from 'axios'

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GLOBAL_DATA_PORT}`,
})

export const instanceCommonData = axios.create({
  baseURL: process.env.REACT_APP_GET_COURSES,
})
