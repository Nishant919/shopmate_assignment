import React from 'react'
import ProductImage from "../assets/image1.jpeg";
import { Link } from 'react-router-dom';

export const CartItem = () => {
    return (
        <section className='w-full'>
            <div class="flex items-center justify-between w-full mt-12 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="/">
                    <img class="h-24 p-8 rounded-t-lg" src={ProductImage} alt="product image" />
                </Link>
                <Link to="/">
                    <h5 class="text-lg font-normal mb-4 tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS</h5>
                </Link>
                <span class="text-lg font-normal text-gray-900 dark:text-white">$599</span>
                <Link to="/" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-normal rounded-md text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</Link>
            </div>

        </section>
    )
}
