import { processRequestAndResponse } from './CoreService'
const baseUrl = '/api';

export async function getPosts() {
	let url = `${baseUrl}/posts`;
	let data = await processRequestAndResponse(url, 'get');
	console.log('data: ', data);
	return data;
}

export async function insertPost(text) {
	let url = `${baseUrl}/posts`;
	let payload = {
		text
	}
	let data = await processRequestAndResponse(url, 'post', payload);
	return data;
}

export async function deletePost(id) {
	let url = `${baseUrl}/posts/${ id }`;
	let data = await processRequestAndResponse(url, 'delete', id);
	return data;
}