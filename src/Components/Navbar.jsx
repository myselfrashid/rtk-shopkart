import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleNavbar = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    const cartQuantity = useSelector(state => state.cart.cartItems.length);
    return (
        <header className='h-20 w-full bg-black flex justify-between items-center md:p-8 xs:p-4'>
            <Link to="/" className='flex flex-row justify-between items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-yellow-500 hover:bg-white flex items-center justify-center hover:text-yellow-500 transition-all'>
                    <h6 className='text-2xl font-bold'>SK</h6>
                </div>
                <div>
                    <h6 className='text-3xl font-bold text-yellow-500 hover:text-white transition-all'>ShopKart</h6>
                </div>
            </Link>
            <div className=''>
                <ul className='md:flex flex-row justify-between items-center text-yellow-500 xs:hidden'>
                    <Link to="/"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>HOME</li></Link>
                    <Link to="/about"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>ABOUT</li></Link>
                    <Link to="/cart"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>CART: {cartQuantity}</li></Link>
                </ul>
            </div>
            <div className={`md:hidden xs:flex flex-col text-white`} >
                <button className='transition-all delay-100 w-8 h-8 flex items-center' onClick={handleNavbar}>{!isNavExpanded ? <BiMenuAltRight className='w-8 h-8 text-yellow-500' /> : <AiOutlineClose className='w-8 h-8 text-yellow-500' />}
                </button>
                {isNavExpanded ?
                    <ul className='md:hidden flex-col gap-8 items-center pt-10 text-yellow-500 xs:flex absolute top-20 z-10 w-full right-0 bg-slate-900 h-screen'>
                        <Link onClick={() => isNavExpanded(false)} to="/"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>HOME</li></Link>
                        <Link onClick={() => isNavExpanded(false)} to="/about"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>ABOUT</li></Link>
                        <Link onClick={() => isNavExpanded(false)} to="/cart"><li className='px-8 py-4 rounded-sm hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer font-semibold'>CART: {cartQuantity}</li></Link>
                    </ul> : <></>}
            </div>
            <Outlet />
        </header>
    )
}

export default Navbar