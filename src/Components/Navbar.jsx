import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartQuantity = useSelector(state => state.cart.cartItems.length);
    return (
        <header className='h-20 w-full bg-black flex justify-between items-center p-8'>
            <Link to="/" className='flex flex-row justify-between items-center gap-4'>
                <div className='w-16 h-16 rounded-full bg-yellow-500 hover:bg-white flex items-center justify-center hover:text-yellow-500 transition-all'>
                    <h6 className='text-3xl font-bold'>SK</h6>
                </div>
                <div>
                    <h6 className='text-3xl font-bold text-yellow-500 hover:text-white transition-all'>ShopKart</h6>
                </div>
            </Link>
            <div>
                {console.log(cartQuantity)}
                <ul className='flex flex-row justify-between items-center text-yellow-500'>
                    <Link to="/"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>HOME</li></Link>
                    <Link to="/about"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>ABOUT</li></Link>
                    <Link to="/cart"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>CART: {cartQuantity}</li></Link>
                </ul>
            </div>
            <Outlet />
        </header>
    )
}

export default Navbar