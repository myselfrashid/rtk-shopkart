import React from 'react';
import emptyCart from '../assets/empty-cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin4Line } from 'react-icons/ri'
import { addToCart, decreaseFromCart, removeFromCart, clearCart } from '../Features/cartReducer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
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
      <img className='w-[25%] bg-center' src={emptyCart} alt="empty cart" />
      <h1 className='text-2xl'>Your cart is empty!</h1>
      <h1 className='text-xl'>Add items to it now.</h1>
      <Link to="/"><button className='mt-4 w-48 h-12 bg-yellow-500 hover:bg-yellow-900 text-white transition-all'>Shop Now</button></Link>
    </div> :
    <div className='w-full min-h-screen max-h-full flex py-8 px-4 items-center gap-4 flex-col bg-yellow-500'>
      {
        cart.cartItems.map((product) => {
          return (
            <div key={product.id} className='w-[40%] flex h-48 items-center justify-center m-4'>
              <div className='w-full h-full flex flex-row gap-3 items-center rounded-lg bg-slate-900'>
                <div className='w-48 bg-white p-4 h-full flex items-center justify-center rounded-lg'>
                  <img src={product.image}></img>
                </div>
                <div className='w-full text-yellow-500 m-4'>
                  <div className='flex flex-col gap-2'>
                    <h2 className='font-bold'>{`${(product.title).slice(0,40)}...`}</h2>
                    <h2 className='font-semibold'>${product.price}</h2>
                    <div className='flex flex-row items-center font-semibold justify-between w-20 h-8'>
                      <button onClick={() => handleIncrease(product)} className='bg-yellow-600 w-6 h-full text-black rounded-s-sm hover:text-white hover:bg-yellow-500 transition-all'>+</button>
                      <p>{product.cartQuantity}</p>
                      <button onClick={() => handleDecrease(product)} className='bg-yellow-600 w-6 h-full text-black rounded-e-sm hover:text-white hover:bg-yellow-500 transition-all'>-</button>
                    </div>
                    <div onClick={() => handleRemove(product)} className='group w-20 h-8 bg-yellow-600 flex items-center justify-center rounded-sm hover:bg-red-800 transition-all cursor-pointer'><RiDeleteBin4Line className='text-black group-hover:text-yellow-600' /></div>
                    <p>Price: $1</p>
                  </div>
                </div>
              </div>
            </div>)
        })
      }
      <div className='flex flex-row w-[50%] items-center justify-end px-8'>
        <button onClick={() => handleEmptyCart()} className='bg-yellow-600 w-32 h-full text-black rounded-s-sm hover:text-white hover:bg-red-800 transition-all px-6 py-4'>Clear Cart</button>
      </div>
    </div>
}

export default Cart