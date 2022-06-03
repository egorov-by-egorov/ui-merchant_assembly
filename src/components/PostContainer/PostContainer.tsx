import React, { FC, useState } from 'react';
import { postApi } from '../../services/PostService';
import PostItem from '../PostItem/PostItem';

const PostContainer: FC = () => {
    const [ limit, setLimit ] = useState( 5 );
    const {
        data: posts,
        error,
        isLoading,
        refetch,
    } = postApi.useFetchAllPostsQuery( limit, {
        //pollingInterval: 1000,
    } );
    //
    //useEffect(() => {
    //	setTimeout(() => {
    //		setLimit(3);
    //	}, 2000);
    //}, []);

    return (
        <div>
            <button onClick={ () => refetch() }>Reload</button>
            { isLoading && <h1>Loading...</h1> }
            { error && <h1>ERROR</h1> }
            { posts &&
                posts.map( ( post ) => {
                    return <PostItem key={ post.id } post={ post } />;
                } ) }
        </div>
    );
};

export default PostContainer;
