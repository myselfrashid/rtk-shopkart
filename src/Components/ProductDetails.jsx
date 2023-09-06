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
        <div className='w-full h-[80vh] bg-yellow-500 flex justify-center p-8'>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className='flex flex-row w-[70%] gap-10 text-yellow-500 bg-gray-900 shadow-2xl rounded-lg'>
                    <div className='flex items-center bg-white w-[35%] p-8 rounded-lg bg-contain justify-center'>
                        <img className='bg-contain h-[75%]' src={product.image} alt={product.id}></img>
                    </div>
                    <div className='w-[60%] p-4 flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>{product.title || <Skeleton />}</h1>
                        <p>{product.description || <Skeleton count={3} />}</p>
                        <h2 className='text-xl'>${product.price || <Skeleton />}</h2>
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