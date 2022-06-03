import { IPost } from '#models/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const postApi = createApi( {
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery( { baseUrl: 'https://jsonplaceholder.typicode.com' } ),
    tagTypes: [ 'Post' ],
    endpoints: ( build ) => ( {
        fetchAllPosts: build.query<IPost[], number>( {
            query: ( limit = 5 ) => ( {
                url: '/posts',
                params: {
                    _limit: limit,
                },
            } ),
            providesTags: () => [ 'Post' ],
        } ),
        createPost: build.mutation<IPost, IPost>( {
            query: ( post ) => ( {
                url: '/posts',
                method: 'POST',
                body: post
            } ),
            invalidatesTags: [ 'Post' ]
        } )
    } ),
} );
