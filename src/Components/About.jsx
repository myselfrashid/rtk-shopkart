import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-4 text-yellow-500 px-16 xs:px-8 py-8 min-h-screen animate-translateText transition-all'>
      <h1 className='text-3xl font-extrabold text-center'>About ShopKart</h1>
      <p>ShopKart is more than just a shopping app; it's a seamless shopping experience powered by cutting-edge technology. Our app connects you to a world of products sourced from the incredible <strong>fakestoreapi.com</strong>, ensuring you always have access to the latest and greatest deals.
      </p>

      <p className='font-bold text-xl italic'>Key Features of ShopKart:</p>
      <ul className='py-4'>
        <li className='list-disc pl-2 ml-4 pb-3'><strong>Realistic Shopping Experience:</strong> Our app simulates the thrill of online shopping by fetching real-time product data from fakestoreapi.com. It's the next best thing to an actual shopping spree.</li>
        <li className='list-disc pl-2 ml-4 pb-3'><strong>Effortless Cart Management:</strong> With the power of Redux Toolkit, we've made managing your shopping cart a breeze. You can add, remove, increase, or decrease product quantities with just a few taps, ensuring a hassle-free shopping experience.</li>
        <li className='list-disc pl-2 ml-4 pb-3'><strong>Toasty Notifications:</strong> Every action you take in your cart comes with a toast notification, keeping you informed and engaged throughout your shopping journey. Whether it's adding an item to your cart or adjusting quantities, we've got you covered.</li>
        <li className='list-disc pl-2 ml-4 pb-3'><strong>Responsive Design:</strong> ShopKart's responsive design ensures that you can enjoy your shopping spree on any device, be it a desktop, tablet, or smartphone. Our commitment to user experience knows no bounds.</li>
      </ul>
      <p>ShopKart is more than just a shopping app; it's an immersive shopping adventure that brings the world of products to your fingertips. Whether you're searching for the perfect gift or indulging in a bit of retail therapy, ShopKart is your trusted companion.</p>

      <p>So why wait? Dive into ShopKart today and discover a world of shopping like never before. Your next great find is just a click away!</p>
    </div>
  )
}

export default About