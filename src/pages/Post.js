import React, { useEffect } from 'react';
import { BaseHttpClientService } from '../services/base-service';
import { PostApiClient } from '../services/post-service';

function Post() {
	useEffect(async () => {
		// Get Örneği

		let data2 = await PostApiClient.GetAllPosts('products');
		let data3 = await PostApiClient.GetCommentsByPostId('products', 1);

		let data = await BaseHttpClientService.get(
			'https://jsonplaceholder.typicode.com/posts'
		);

		console.log('data', data);

		// Post Örneği

		//     let param = {
		//         id:1,
		//         title:'deneme',
		//     }

		//   let response =   BaseHttpClientService.post(
		// 				'https://jsonplaceholder.typicode.com/posts', param
		// 			);
	}, []);

	return <div>Post</div>;
}

export default Post;
