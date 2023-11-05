import { Link, NavLink } from "react-router-dom";
import Container from "./Container/Container";
import userLogo from "../../src/assets/user.png"



const NavBar = () => {

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

    return (
        <div className="bg-gray-200">
            <Container>
                <div className="navbar py-4">
                    <div className="navbar-start w-full  flex justify-between lg:w-3/4">
                        <a className="btn btn-ghost normal-case text-xl">Wisdom Center</a>
                        <div className="dropdown dropdown-left dropdown-bottom">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navLink
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
                    <div className="navbar-end hidden lg:flex">
                        <Link
                            to='/login'>
                            <button
                                className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                            >Login</button>
                        </Link>
                        <div className="dropdown dropdown-left dropdown-bottom">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={userLogo} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBar;