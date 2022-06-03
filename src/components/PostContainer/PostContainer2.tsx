import React, { FC } from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';

const PostContainer2: FC = () => {
	const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(5);
	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>ERROR</h1>}
			{posts &&
				posts.map((post) => {
					return <PostItem key={post.id} post={post} />;
				})}
		</div>
	);
};

export default PostContainer2;
