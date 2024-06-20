import React from 'react'

import Logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {

    const activeClass = "block py-2 px-3 md:py-2 md:px-4 text-xl bg-gray-200 text-white rounded md:text-black md:dark:text-blue-500";
    const inActiveClass = "block py-2 px-3 md:py-2 md:px-4 text-xl text-gray-900 rounded dark:border-gray-700";

    return (
        <section>
            <nav className="bg-white border-gray-200 border-b-2 dark:bg-gray-900 mx-3">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-10" alt="Flowbite Logo" />
                        <span className="self-center text-xl  whitespace-nowrap dark:text-white">Shopping Cart</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/cart" className="text-black font-medium smallrounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart: 2</Link>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section >
    )
}


