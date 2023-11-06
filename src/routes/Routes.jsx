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
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
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
                element:<BookDetails></BookDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path:'/read-book/:id',
                element:<ReadBook></ReadBook>,
                loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`)
            },
            
            



        ]
    },
]);

export default router;