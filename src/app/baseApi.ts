import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/api/books'
        }),
        AddBook: builder.mutation({
            query: (bookData) => ({
                url: '/api/book',
                method: 'POST',
                body: bookData,
            })
        }),
        addBorrowBook: builder.mutation({
            query: (borrowedData) => ({
                url: '/api/borrow',
                method: "POST",
                body: borrowedData
            })
        }),

        updateBook: builder.mutation({
            query: ({ id, ...put }) => ({
                url: `/api/books/${id}`,
                method: "PUT",
                body: put
            })
        }),

        getSingleBook: builder.query({
            query: (id) => `/api/books/${id}`
        }),

        getBorrowedBook: builder.query({
            query: () => '/api/borrow'
        }),

        deleteBook: builder.mutation({
            query: ({ id }) => ({
                url: `/api/books/${id}`,
                method: "DELETE",
            })
        })
    }),



})


export const { useGetBooksQuery, useAddBookMutation, useAddBorrowBookMutation, useUpdateBookMutation, useGetSingleBookQuery, useGetBorrowedBookQuery, useDeleteBookMutation } = baseApi;