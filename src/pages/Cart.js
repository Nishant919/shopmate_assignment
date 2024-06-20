import React from 'react'
import { CartItem } from '../Components';

export const Cart = () => {
    return (
        <section>
            <div>
                <div className='text-center m-8 font-bold text-2xl'>
                    Cart Items: 2
                </div>
                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </section>
    )
}
