import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BookPage from "../Pages/BookPage/BookPage";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadBook from "../components/ReadBook/ReadBook";
import UpdateBook from "../components/UpdateBook/UpdateBook";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/add-book',
                element:<PrivateRoute><AdminRoute><AddBook></AddBook></AdminRoute></PrivateRoute>
            },
            {
                path:'/all-books',
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:'/borrowed-books',
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/book-page/:category',
                element:<BookPage></BookPage>,
            },
            {
                path:'/book-details/:id',
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://wisdom-center-server.vercel.app/books/${params.id}`)
            },
            {
                path:'/read-book/:id',
                element:<ReadBook></ReadBook>,
                loader: ({params})=> fetch(`https://wisdom-center-server.vercel.app/books/${params.id}`)
            },
            {
                path:'/all-books/update-book/:id',
                element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader: ({params})=> fetch(`https://wisdom-center-server.vercel.app/books/${params.id}`)
            }
            
            



        ]
    },
]);

export default router;