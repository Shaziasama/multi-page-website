import React from 'react'




const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7'>
    <div className='absolute inset-0 0pacity-20'>
    
    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/010/419/small/the-delicious-burger-in-the-black-background-with-ai-generated-free-photo.jpg"


 className="w-full h-full object cover" />
    

    </div>
     <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
      <h2 className='text-white sm:text-5xl font-bold mb-4'>Discover our Menu</h2>
      <p className='text-white text-lg text-center mb-6 max-w-xl'>Shop Now For Exclusive Burger Discount!</p>
      <button
      type='button'
      className='bg-yellow-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transation duration-300'>
      Excting Deals Launch at 12PM

      </button>
     </div>

    </div>
    
  
  )
}

export default Banner
