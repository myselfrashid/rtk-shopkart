import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../Features/cartReducer';
import { useDispatch } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    return (
        <div className='w-full lg:h-[80vh] md:h-[75vh] bg-yellow-500 flex justify-center p-8'>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className='flex md:flex-row xs:flex-col lg:w-[70%] md:w-[90%] lg:gap-10 md:gap-5 lg:h-full md:h-[70%] text-yellow-500 bg-gray-900 shadow-2xl rounded-lg'>
                    <div className='flex items-center bg-white md:w-[35%] xs:w-full p-8 rounded-lg bg-contain justify-center'>
                        <img className='bg-contain lg:h-[75%] md:h-[60%]' src={product.image} alt={product.id}></img>
                    </div>
                    <div className='md:w-[60%] xs:w-full p-4 flex flex-col lg:gap-4 md:gap-2'>
                        <h1 className='lg:text-2xl md:text-xl xs:text-lg md:text-left xs:text-center font-bold'>{product.title || <Skeleton />}</h1>
                        <p className='lg:text-base md:text-sm xs:text-xs'>{product.description || <Skeleton count={3} />}</p>
                        <h2 className='text-xl xs:text-lg'>${product.price || <Skeleton />}</h2>
                        <div className='flex gap-4'>
                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <Link to="/cart">
                                    <button className='bg-yellow-500 px-3 py-2 font-semibold text-black hover:ring-1 hover:ring-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all'>Go to Cart</button>
                                </Link>
                                <button className='bg-yellow-500 px-3 py-2 font-semibold text-black hover:ring-1 hover:ring-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all' onClick={() => { handleAddToCart(product) }}>Add to Cart</button>
                            </SkeletonTheme>
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default ProductDetails