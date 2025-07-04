import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder)=>({
        getBooks: builder.query({
            query: ()=> '/api/books'
        }),
        AddBook: builder.mutation({
            query: (bookData)=>({
                url: '/api/book',
                method: 'POST',
                body: bookData,
            })
        }),
        addBorrowBook: builder.mutation({
            query: (borrowedData)=>({
                url: '/api/borrow',
                method: "POST",
                body: borrowedData
            })
        }),

        updateBook: builder.mutation({
            query: ({id, ...patch})=>({
                url: `/api/books/${id}`,
                method: "PATCH",
                body: patch
            })
        })
    }),

    
    
})


export const {useGetBooksQuery, useAddBookMutation, useAddBorrowBookMutation, useUpdateBookMutation} = baseApi;