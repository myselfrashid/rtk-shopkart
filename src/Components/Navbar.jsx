import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='h-20 w-full bg-slate-900 flex justify-between items-center p-8'>
            <Link to="/" className='flex flex-row justify-between items-center gap-4 border-2 border-white'>
                <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center'>
                    <h6 className='text-3xl font-bold'>SK</h6>
                </div>
                <div>
                    <h6 className='text-3xl font-bold text-white'>ShopKart</h6>
                </div>
            </Link>
            <div>
                <ul className='flex flex-row justify-between items-center text-white'>
                    <li className='px-8 py-6 hover:bg-slate-800 cursor-pointer'><Link>Home</Link></li>
                    <li className='px-8 py-6 hover:bg-slate-800 cursor-pointer'><Link>About</Link></li>
                    <li className='px-8 py-6 hover:bg-slate-800 cursor-pointer'><Link>Cart</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar