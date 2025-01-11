import React from 'react'

const Reservation = () => {

  return (
    <section className='bg-gradient-to-r from-black to-slate-900 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl extrabold mb-6 text-yellow-500'>Make A Reservation</h2>
            <form className='max-w-md mx-auto'>
                <div className='mb-4 text-white'>
                    <input 
                    type="text" 
                    placeholder='Your Name'
                    className='w-full p-3 border-gray-300 rounded-md'
                    required/>
                </div>
                <div className='mb-4'>
                    <input type="email" 
                    placeholder='Your Email'
                    className='w-full p-3 border-gray-300 rounded-md '
                    required/>

                </div>


                <div className='mb-4'>
                    <input type="date" 
                   className='w-full p-3 border-gray-300 rounded-md '
                    required/>

                </div>

                <div className='mb-4'>
                    <input type="time" 
                   className='w-full p-3 border-gray-300 rounded-md '
                    required/>

                </div>

             <div className=' mb-4 '>
                <button className='bg-yellow-500 text-whit py-2 px-4 rounded-md hover:bg-yellow-700'>Reserved Table</button>
             </div>


            </form>
        </div>
    </section>
  )
}

export default Reservation
