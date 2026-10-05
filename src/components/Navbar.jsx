import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/logo.png'


function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    return (
        <header>
            <div className="navbar bg-base-100 shadow-sm fixed z-100 ">
                <div className="navbar-start w-full">

                    <Link to='/' className="hidden md:flex w-full text-xl uppercase md:text-3xl text-yellow-400 font-bold">
                        <img className='w-15 h-15 ml-5' src={logo} alt="Challenge Consulting" />
                    </Link>

                    <Link to='/' className="flex md:hidden w-full text-xl md:text-3xl uppercase text-yellow-400 font-bold">
                        <img className='w-20 h-20 ml-5' src={logo} alt="Challenge Consulting" />
                    </Link>

                    {/* Mobile Menu */}
                    <div className="block sm:block md:hidden lg:hidden">
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="btn btn-ghost md:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-15 w-15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        {/* Overlay */}
                        {open && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                onClick={() => setOpen(false)}
                            ></div>
                        )}

                        {/* Sliding Menu */}
                        <div
                            className={`fixed top-0 pt-10 left-0 h-full w-64 bg-[#000033] text-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                                }`}
                        >
                            <div className="flex flex-col p-4 space-y-4">
                                <a className="flex md:hidden w-full items-center justify-center text-xl md:text-3xl uppercase text-yellow-400 font-bold">
                                    <img className="w-20 h-20 rounded-2xl" src={logo} alt="Challenge Consulting" />
                                </a>


                                <NavLink
                                    to="/"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "btn w-full bg-yellow-400 text-black text-sm uppercase"
                                            : "btn w-full btn-ghost text-white hover:text-yellow-400 hover:bg-blue-900 text-sm uppercase"
                                    }
                                >
                                    Challenge Consulting
                                </NavLink>

                                {/* Training Programs with sub-links */}
                                <NavLink
                                    to="/Tprogram"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "btn w-full bg-yellow-400 text-black text-sm uppercase"
                                            : "btn w-full btn-ghost text-white hover:text-yellow-400 hover:bg-blue-900 text-sm uppercase"
                                    }
                                >
                                    Our Training Programs
                                </NavLink>

                                <div className="ml-4 flex flex-col space-y-2">
                                    <NavLink
                                        to="/Single"
                                        onClick={() => setOpen(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "btn w-full bg-[#ffcc00] text-black font-semibold"
                                                : "btn btn-ghost w-full text-white hover:text-[#ffcc00]"
                                        }
                                    >
                                        Single-discipline training programs
                                    </NavLink>

                                    <NavLink
                                        to="/Multi"
                                        onClick={() => setOpen(false)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "btn w-full bg-[#ffcc00] text-black font-semibold"
                                                : "btn btn-ghost w-full text-white hover:text-[#ffcc00]"
                                        }
                                    >
                                        Multidisciplinary Training
                                    </NavLink>
                                </div>


                                <NavLink
                                    to="/Services"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "btn w-full bg-yellow-400 text-black text-base uppercase"
                                            : "btn w-full btn-ghost text-white hover:text-yellow-400 hover:bg-blue-900 text-base uppercase"
                                    }
                                >
                                    Services
                                </NavLink>

                                <NavLink
                                    to="/News"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "btn w-full bg-yellow-400 text-black text-base uppercase"
                                            : "btn w-full btn-ghost text-white hover:text-yellow-400 hover:bg-blue-900 text-base uppercase"
                                    }
                                >
                                    News
                                </NavLink>

                                <NavLink
                                    to="/Gallery"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "btn w-full bg-yellow-400 text-black text-base uppercase"
                                            : "btn w-full btn-ghost text-white hover:text-yellow-400 hover:bg-blue-900 text-base uppercase"
                                    }
                                >
                                    Gallery
                                </NavLink>

                                <NavLink
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "btn w-full bg-[#ffcc00] text-black text-base uppercase"
                                            : "btn w-full btn-ghost bg-[#000033] text-white hover:text-black border-2 border-black hover:bg-white text-base uppercase"
                                    }
                                >
                                    Register
                                </NavLink>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="navbar-end hidden md:flex lg:flex  font-bold m-auto mr-30">
                    <ul className="flex gap-7">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "btn bg-yellow-400 text-blue-950 md:text-base text-base uppercase"
                                    : "btn btn-ghost hover:text-white hover:bg-blue-950 text-base uppercase"
                            }
                        >
                            Challenge Consulting
                        </NavLink>

                        <li className="relative group">
                            {/* Main NavLink */}
                            <NavLink
                                to="/Tprogram"
                                className={
                                    location.pathname.startsWith("/Tprogram") || location.pathname === "/Single-f" || location.pathname === "/Multi-f"
                                        ? "btn bg-yellow-400 text-blue-950 md:text-base text-base w-50"
                                        : "btn btn-ghost hover:text-white hover:bg-blue-950 text-base w-50"
                                }
                            >
                                Our Training Programs
                            </NavLink>

                            {/* Dropdown Menu */}
                            <ul className="absolute left-0 mt-0 hidden w-48 bg-[#000033] rounded-lg shadow-lg group-hover:block">
                                <li>
                                    <NavLink
                                        to="/Single"
                                        className="block px-4 py-2 text-white md:text-base hover:text-[#ffcc00]"
                                    >
                                        Single-discipline training programs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Multi"
                                        className="block px-4 py-2 text-white md:text-base hover:text-[#ffcc00]"
                                    >
                                        Multidisciplinary Training
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <NavLink
                            to="/Services"
                            className={({ isActive }) =>
                                isActive
                                    ? "btn bg-yellow-400 text-blue-950 md:text-base text-base "
                                    : "btn btn-ghost hover:text-white hover:bg-blue-950 text-base "
                            }
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/News"
                            className={({ isActive }) =>
                                isActive
                                    ? "btn bg-yellow-400 text-blue-950 md:text-base text-base "
                                    : "btn btn-ghost hover:text-white hover:bg-blue-950 text-base"
                            }

                        >
                            News
                        </NavLink>

                        <NavLink
                            to="/Gallery"
                            className={({ isActive }) =>
                                isActive
                                    ? "btn bg-yellow-400 text-blue-950 md:text-base text-base "
                                    : "btn btn-ghost hover:text-white hover:bg-blue-950 text-base"
                            }
                        >
                            Gallery
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "btn bg-[#000033] text-white md:text-base text-base "
                                    : "btn btn-ghost bg-[#000033] text-white hover:text-black border-2 border-black hover:bg-white text-base"
                            }
                        >
                            Register
                        </NavLink>


                    </ul>
                </div>


            </div>
        </header>
    )
}
export default Navbar;