import axios from axios;

const url = 'http://localhost:5000/api/posts'; 

class PostService {

	//Get Post
	static getPosts() {
		return Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(post => ({
						...post,
						createdAt: new Date(post.createdAt)
					}))
				);
			} catch (err) {
				reject(err);
			}
		})
	}

	// create post

	// delete post

}