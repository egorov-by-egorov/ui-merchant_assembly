import { IPost } from '#models/IPost';
import React, { FC } from 'react';

interface PostItemProps {
	post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	return (
		<div>
			<span>{post.id}</span> - <span>{post.title}</span>
			<button>Удалить</button>
		</div>
	);
};

export default PostItem;
