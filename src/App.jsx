import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className='relative bg-gray-900 h-full'>
      <SkeletonTheme>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='products/:id' element={<ProductDetails />} />
        </Routes>
        <Toaster />
        <Footer />
      </SkeletonTheme>
    </div>
  )
}

export default App;
