import { Link, NavLink } from "react-router-dom";
import Container from "./Container/Container";
import userLogo from "../../src/assets/user.png"
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import logo from '../assets/wisdom-logo.png'



const NavBar = () => {
    const { logOutUser, user } = useAuth()

    // Dark light toggle
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }

    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const navLink = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-orange-400 font-bold mr-4" : "text-xl font-semibold mr-4"
        }
        > Home</NavLink>
        <NavLink to="/add-book" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-orange-400 font-bold mr-4" : "text-lg font-semibold mr-4"
        }
        > Add Book</NavLink>
        <NavLink to="/all-books" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-orange-400 font-bold mr-4" : "text-lg font-semibold mr-4"
        }
        > All Books</NavLink>
        <NavLink to="/borrowed-books" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-orange-400 font-bold mr-4" : "text-lg font-semibold mr-4"
        }
        > Borrowed Books</NavLink>

    </>

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast('Logged Out successfully')
            })
            .catch(error => {
                console.log(error)
                toast(error.message)
            })

    }

    return (
        <div className="">
            <Container>
                <div className="navbar py-4  shadow-xl bg-transparent ">
                    <div className="navbar-start w-full  flex justify-between lg:w-3/4">
                        <img className="w-60 h-16 object-cover" src={logo} alt="" />
                        {/* <a className="btn btn-ghost normal-case text-xl">Wisdom Center</a> */}
                        <div className="dropdown dropdown-left dropdown-bottom">

                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                {
                                   user?.email && <img className="w-10 rounded-full" src={user?.photoURL ? user.photoURL : userLogo} />
                                }
                                {
                                   user && <a className="justify-between text-xl font-bold mb-2">
                                        {
                                            user?.displayName ? user.displayName : "username"
                                        }
                                    </a>
                                }
                                {
                                    navLink
                                }
                                {
                                   user?.email ? <button onClick={handleLogOut} className="btn btn-sm text-white bg-[#2eca7f] mb-2 hover:bg-[#6610f2]">Logout</button>
                                   : 
                                   <Link
                                    to='/login'>
                                    <button
                                        className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                                    >Login</button>
                                </Link>
                                }


                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 mr-4">
                            {
                                navLink
                            }
                        </ul>
                    </div>

                    <label className="swap swap-rotate mr-4">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                    <div className="navbar-end hidden lg:flex">
                        {
                            user?.email ?
                                <div className="dropdown dropdown-left dropdown-bottom">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-20 rounded-full">
                                            <img src={user?.photoURL ? user.photoURL : userLogo} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between text-xl font-bold mb-2">
                                                {
                                                    user?.displayName ? user.displayName : "username"
                                                }
                                            </a>
                                        </li>
                                        <button onClick={handleLogOut} className="btn btn-sm text-white bg-[#2eca7f] mb-2 hover:bg-[#6610f2]">Logout</button>
                                    </ul>
                                </div>
                                :
                                <Link
                                    to='/login'>
                                    <button
                                        className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                                    >Login</button>
                                </Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBar;