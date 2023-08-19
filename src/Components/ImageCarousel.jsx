import React, { useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";



const ImageCarousel = () => {
    const slides = [
        {
            url: img1
        },
        {
            url: img2
        },
        {
            url: img3
        },
        {
            url: img4
        },
    ]
    return (
        <div className='max-w-full h-96 relative flex m-auto'>
            <div style={{ backgroundImage: `url(${slides[1].url})` }} className='w-full h-full bg-center bg-cover duration-300'></div>

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 items-center cursor-pointer pl-4'><BsFillArrowLeftCircleFill className='text-white active:text-black transition-all'/></div>
        <div className='absolute z-10 top-[50%] -translate-x-0 translate-y-[-50%] right-5 items-center cursor-pointer pr-4'><BsFillArrowRightCircleFill className='text-white active:text-black transition-all'/></div>
        </div>
    )
}

export default ImageCarousel