import React from 'react'

const Spinner = () => {
  return (
    <div className='top-0 w-full h-screen bg-slate-700 transition-all delay-300 flex flex-col justify-center items-center'>
        <div className='bg-slate-400 rounded-full h-20 w-20 flex items-center justify-center animate-bounce'>
            <div className='bg-slate-200 rounded-full h-10 w-10 animate-pulse'></div>
        </div>
    </div>
  )
}

export default Spinner;