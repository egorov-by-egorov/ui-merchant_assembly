//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
//
//export const AuthAPI = createApi( {
//    reducerPath: 'authApi',
//    baseQuery: fetchBaseQuery( { baseUrl: 'https://lk.dev.iml.ru/api' } ),
//    tagTypes: [ 'Auth' ],
//    endpoints: ( build ) => ( {
//        fetchAllPosts: build.query<IPost[], number>( {
//            query: ( limit = 5 ) => ( {
//                url: '/authorization/session/v1/by-email',
//                params: {
//                    _limit: limit,
//                },
//            } ),
//            providesTags: () => [ 'Post' ],
//        } ),
//        refreshSession: build.mutation<IAuth>( {
//            query: ( post ) => ( {
//                url: '/posts',
//                method: 'POST',
//                body: post
//            } ),
//            invalidatesTags: [ 'Post' ]
//        } )
//    } ),
//} )

export {}