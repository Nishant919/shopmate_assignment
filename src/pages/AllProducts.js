import React from 'react'
import { ProductCard } from '../Components';


export const AllProducts = () => {

    const products = [
        { "id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "../assets/image1.jpeg" },
        { "id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "../assets/image1.jpeg" },
        { "id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "../assets/image1.jpeg" },
        { "id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "../assets/image1.jpeg" },
        { "id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "../assets/image1.jpeg" },
        { "id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "../assets/image1.jpeg" }
    ]

    return (
        <main>
            <section className='flex flex-wrap justify-evenly mb-12'>
                {products.map(((product) => (
                    <ProductCard product={product} />
                )))
                }
            </section>
        </main>
    )
}
