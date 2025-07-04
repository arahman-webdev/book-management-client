import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Landing from "../pages/Landing";
import AllBooks from "../pages/AllBooks";

import BorrowSummery from "../pages/BorrowSummary";
import { AddBook } from "@/pages/AddBook";
import Update from "@/pages/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div><h2>Error page</h2></div>,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: '/all-books',
                element: <AllBooks />
            },
            {
                path: '/add-book',
                element: <AddBook />
            },
            {
                path: '/borrow-summary',
                element: <BorrowSummery />
            },
            {
                path: '/update/:bookId',
                element: <Update />,
           
            }
        ]
    }
])


export default router