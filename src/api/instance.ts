import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
  },
})

export const instanceCommonData = axios.create({
  baseURL: process.env.REACT_APP_GET_COURSES,
})
