import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Features/productReducer';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

export const Products = () => {
    const products = useSelector((state) => state.product.products);
    const status = useSelector((state) => state.product.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='md:grid lg:grid-cols-4 sm:grid-cols-3 gap-4 sm:flex flex-col w-full place-items-center my-8 p-10'>
            {
                status ?
                    <div className='w-full absolute top-0'><Spinner /></div> :
                    products.map((product) => (
                        <div key={product.id} className=''>
                            <ProductCard image={product.image} title={product.title} price={product.price} product={product} />
                        </div>
                    ))
            }
        </div>
    )
}
