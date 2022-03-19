import { processRequestAndResponse } from './CoreService'
const baseUrl = '/api'

export async function getPosts () {
  const url = `${baseUrl}/posts`
  const data = await processRequestAndResponse(url, 'get')
  console.log('data: ', data)
  return data
}

export async function insertPost (text) {
  const url = `${baseUrl}/posts`
  const payload = {
    text
  }
  const data = await processRequestAndResponse(url, 'post', payload)
  return data
}

export async function deletePost (id) {
  const url = `${baseUrl}/posts/${id}`
  const data = await processRequestAndResponse(url, 'delete', id)
  return data
}
