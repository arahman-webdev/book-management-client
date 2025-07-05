import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-server-tau-five.vercel.app/' }),
    tagTypes: ['book'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/api/books',
            providesTags: ['book']
        }),
        AddBook: builder.mutation({
            query: (bookData) => ({
                url: '/api/book',
                method: 'POST',
                body: bookData,
            }),
            invalidatesTags: ['book']
        }),
        addBorrowBook: builder.mutation({
            query: (borrowedData) => ({
                url: '/api/borrow',
                method: "POST",
                body: borrowedData
            }),
            invalidatesTags: ['book']
        }),

        updateBook: builder.mutation({
            query: ({ id, ...put }) => ({
                url: `/api/books/${id}`,
                method: "PUT",
                body: put
            }),
            invalidatesTags: ['book']
        }),

        getSingleBook: builder.query({
            query: (id) => `/api/books/${id}`,
            providesTags: ['book']
        }),

        getBorrowedBook: builder.query({
            query: () => '/api/borrow',
            providesTags: ['book']
        }),

        deleteBook: builder.mutation({
            query: ({ id }) => ({
                url: `/api/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['book']
        })
    }),



})


export const { useGetBooksQuery, useAddBookMutation, useAddBorrowBookMutation, useUpdateBookMutation, useGetSingleBookQuery, useGetBorrowedBookQuery, useDeleteBookMutation } = baseApi;