import React, { useEffect } from 'react';
import emptyCart from '../assets/empty-cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin4Line } from 'react-icons/ri'
import { addToCart, decreaseFromCart, removeFromCart, clearCart, getTotals } from '../Features/cartReducer';
import { Link } from 'react-router-dom';
import Total from './Total';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch, Total]);

  const cartItems = cart.cartItems.length;
  const handleIncrease = (product) => {
    dispatch(addToCart(product))
  }
  const handleDecrease = (product) => {
    dispatch(decreaseFromCart(product))
  }
  const handleRemove = (product) => {
    dispatch(removeFromCart(product))
  }
  const handleEmptyCart = () => {
    dispatch(clearCart())
  }

  return cartItems === 0 ?
    <div className='w-full h-[100vh] flex justify-start items-center flex-col text-yellow-500'>
      <img className='lg:w-[25%] md:w-[50%] bg-center' src={emptyCart} alt="empty cart" />
      <h1 className='text-2xl'>Your cart is empty!</h1>
      <h1 className='text-xl'>Add items to it now.</h1>
      <Link to="/"><button className='mt-4 w-48 h-12 bg-yellow-500 hover:bg-yellow-900 text-white transition-all'>Shop Now</button></Link>
    </div> :
    <div className='bg-yellow-500 w-full'>
      <div className='flex md:flex-row xs:flex-col'>
        <div className='md:w-2/3 xs:w-full min-h-screen max-h-full flex flex-col py-8 md:px-4 xs:px-2 items-center md:gap-4 xs:gap-2'>
          {
            cart.cartItems.map((product) => {
              const price = Math.floor(product.price);
              return (
                <div key={product.id} className='lg:w-[80%] md:w-full xs:w-full flex md:h-48 xs:h-40 items-center justify-center md:m-4 xs:m-2'>
                  <div className='w-full h-full flex flex-row md:gap-3 xs:gap-0 items-center rounded-lg bg-slate-900'>
                    <div className='lg:w-48 xs:w-44 bg-white lg:p-4 md:p-2 xs:p-2 h-full flex items-center justify-center rounded-lg'>
                      <img src={product.image}></img>
                    </div>
                    <div className='w-full text-yellow-500 md:m-4 xs:m-2'>
                      <div className='flex flex-col lg:gap-2 xs:gap-1'>
                        <h2 className='md:font-bold xs:font-semibold md:text-base xs:text-sm'>{`${(product.title).slice(0, 40)}...`}</h2>
                        <h2 className='font-semibold'>${price}</h2>
                        <div className='flex flex-row items-center font-semibold justify-between md:w-20 md:h-8 xs:w-16 xs:h-6'>
                          <button onClick={() => handleIncrease(product)} className='bg-yellow-600 md:w-6 xs:w-5 h-full text-black rounded-s-sm hover:text-white hover:bg-yellow-500 transition-all'>+</button>
                          <p className='xs:text-sm md:text-base'>{product.cartQuantity}</p>
                          <button onClick={() => handleDecrease(product)} className='bg-yellow-600 md:w-6 xs:w-5 h-full text-black rounded-e-sm hover:text-white hover:bg-yellow-500 transition-all'>-</button>
                        </div>
                        <div onClick={() => handleRemove(product)} className='group md:w-20 md:h-8 xs:w-16 xs:h-6 bg-yellow-600 flex items-center justify-center rounded-sm hover:bg-red-800 transition-all cursor-pointer'><RiDeleteBin4Line className='text-black group-hover:text-yellow-600' /></div>
                        <p className='md:text-base xs:text-sm'>Total: ${price * product.cartQuantity}</p>
                      </div>
                    </div>
                  </div>
                </div>)
            })
          }
          <div className='flex flex-row lg:w-4/5 md:w-full xs:w-full items-center justify-end lg:p-8 md:p-0'>
            <button onClick={() => handleEmptyCart()} className='bg-yellow-600 w-32 h-full text-black rounded-s-sm hover:text-white hover:bg-red-800 transition-all px-6 py-4'>Clear Cart</button>
          </div>
        </div>
        <div className='lg:w-1/2 md:w-2/4 lg:py-10 md:py-8 xs:py-4 flex xs:justify-center'><Total /></div>
      </div>
    </div>
}

export default Cart