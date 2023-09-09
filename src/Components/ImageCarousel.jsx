import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillCircleFill } from "react-icons/bs";


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

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            const lastSlide = currentIndex === slides.length - 1;
            const newIndex = lastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex)
        }, 5000)
        return () => clearInterval(intervalID)
    }, [currentIndex]);

    const prevSlide = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    
    const nextSlide = () => {
        const lastSlide = currentIndex === slides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    
    const goToSlide = (index) => {
        setCurrentIndex(index)
    }
    
    return (
        <div className='max-w-full lg:h-80 md:h-60 xs:h-40 relative flex flex-col m-auto group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-300'></div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 items-center cursor-pointer md:pl-4 sm:pl-2'><BsFillArrowLeftCircleFill onClick={prevSlide} className='text-white active:text-black transition-all' /></div>
            <div className='hidden group-hover:block absolute z-10 top-[50%] -translate-x-0 translate-y-[-50%] right-5 items-center cursor-pointer md:pr-4 sm:pr-2'><BsFillArrowRightCircleFill onClick={nextSlide} className='text-white active:text-black transition-all' /></div>
            <div className='flex justify-center absolute bottom-0 items-center w-full pb-4'>
                {slides.map((slide, slideIndex) => {
                    return (
                        <div onClick={() => goToSlide(slideIndex)} key={slideIndex} className='px-1'><BsFillCircleFill className='cursor-pointer' size={10} /></div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageCarousel