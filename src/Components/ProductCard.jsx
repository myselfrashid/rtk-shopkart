import React from 'react';
import { addToCart } from '../Features/cartReducer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (

        <div className='lg:h-80 lg:w-60 md:h-80 md:w-56 xs:w-56 xs:h-80 relative overflow-hidden flex flex-col justify-between shadow-xl my-8 bg-white rounded-md lg:hover:scale-95 transition-all'>
                <div className='flex items-center justify-center px-2 py-4'><img src={props.image} alt={props.title} className='h-40 w-auto bg-center bg-cover'></img></div>
                <div className='flex items-center flex-col justify-evenly group bg-black text-white hover:bg-white hover:text-black transition-all delay-100 h-[40%] px-6'>
                    <div className='flex flex-row gap-4'>
                        <p className='w-[80%] text-sm'>{(props.title).slice(0, 25)}</p>
                        <p className='text-center font-semibold font-mono'>${props.price}</p>
                    </div>
                    <div className='flex w-full items-center justify-between'>
                        <Link to={`products/${props.product.id}`}><button className='group-hover:bg-black group-hover:text-yellow-500 bg-yellow-500 px-3 py-2 font-semibold'>Details</button></Link>
                        <button onClick={() => handleAddToCart(props.product)} className='group-hover:bg-black group-hover:text-yellow-500 bg-yellow-500 px-1 py-2 font-semibold'>Add to Cart</button>
                    </div>
                </div>
        </div>
    )
}

export default ProductCard