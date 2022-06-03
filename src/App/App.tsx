import MainLayout from '#ui/templates/MainLayout/MainLayout';
import React, { FC } from 'react';
import PostContainer from '../components/PostContainer/PostContainer';
import PostContainer2 from '../components/PostContainer/PostContainer2';

const App: FC = () => {
	return (
		<MainLayout>
			<div style={{ display: 'flex' }}>
				<PostContainer />
				<PostContainer2 />
			</div>
		</MainLayout>
	);
};

export default App;
