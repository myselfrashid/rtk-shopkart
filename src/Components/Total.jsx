import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
    const cartTotal = useSelector((state) => state.cart);
    /* const totalPrice = cartTotal.reduce((total, product) => {
        return Math.ceil(total + product.price).toFixed(2);
    }, 0); */


    return cartTotal === 0 ? 
    (
        <div>
            <h1>Total is 0</h1>
        </div>

    ) : 
    (
        <div className='bg-slate-900 text-yellow-500 lg:w-3/5 md:4/5 xs:w-[90%] h-44 md:m-4 xs:m-0 rounded-md py-4 px-8 flex flex-col gap-4 transition-all delay-100'>
            <h1 className='text-center font-bold uppercase text-xl'>Cart Summary</h1>
            <p>Total items: {cartTotal.cartTotalQuantity}</p>
            <p>Total: ${Math.floor(cartTotal.cartTotalAmount) }</p>
        </div>
    )
}

export default Total