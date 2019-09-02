import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://172.18.200.65:8080/'
})

export const apiUserLogin = data => request.post('/login', data)
export const apiBook = () => request.get('/bookInfo')
export const apiUserSignUp = data => request.post('/signup', data)