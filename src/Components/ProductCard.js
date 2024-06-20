import React from 'react'
import ProductImage from "../assets/image1.jpeg";
import { Link } from 'react-router-dom';


export const ProductCard = ({ product }) => {
    return (
        <div class="w-full max-w-sm mt-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="/">
                <img class="p-8 rounded-t-lg" src={ProductImage} alt="product image" />
            </Link>
            <div class="px-5 pb-5">
                <Link to="/">
                    <h5 class="text-xl font-semibold mb-4 tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </Link>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-semibold text-gray-900 dark:text-white">{`$${product.price}`}</span>
                    <Link to="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-md text-lg px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                </div>
            </div>
        </div>

    )
}
