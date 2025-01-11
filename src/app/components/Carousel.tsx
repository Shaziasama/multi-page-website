import React from 'react'

const Carousel = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-gray-800'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-h3span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'> 
             <a href=""
             className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
              <img src="https://b12burger.ca/wp-content/uploads/2022/09/1-CLASSIQUE.jpg"
               alt="burger 1" 
               className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
              />
              <div className='absolute inset-0 bg-gradient-to-b form-grey-900/5'></div>
            
            <h3 className='z-10 text-2xl font-medium text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{""}
              Classic Bites{""}
          </h3>2
              </a>
              </div>
             
             <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700">
             
              <a href=""
              className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              
            <img src="https://img.freepik.com/premium-photo/hamburger-is-grill-with-flames-background_956920-252167.jpg" 

            alt="burger 2" 
            
            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
            />
            <div className='absolute inset-0 bg-gradient-to-b form-grey-900/5'></div>
          
           <h3 className='z-10 text-2xl font-medium text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{""}
            Gourmet Grills{""}
               </h3>
                 </a>
                 <div className='grid gap-4 grid-cols-2 sm:grid-col lg:-cols-'>
              <a href=""
              className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
              <img src="https://www.krumpli.co.uk/wp-content/uploads/2019/01/Indian-Lamb-Burger-with-Bombay-Potato-Wedges-1-540x720.jpg.webp" 
              alt="burger 3" 
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transation-transform duration-500 ease-in-out'/>
              <div className='absolute inset-0 bg-gradient-to-b from-grey-700/5 '></div>
              <h3 className='z-10 text-2xl font-medium text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{""}
                Spicy masala{""}
              </h3>
              
              </a>
              <a href=""
              className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>

             <img src="https://mypureplants.com/wp-content/uploads/2022/01/Vegan-TVP-burger-big-mac-feat.jpg" 
              alt="burger 4" 
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transation-transform duration-500 ease-in-out'/>
              <div className='absolute inset-0 bg-gradient-to-b from-grey-900/5 '></div>
              <h3 className='z-10 text-2xl font-medium text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{""}
                Meaty Vegan{""}
              </h3>
             </a>
             </div>
             </div>
            

            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to grey-700 h-auto md:h-full flex flex-col'>
              <a href=""
            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>

          <img src="https://bakersway.in/cdn/shop/files/cheese-burger.png?v=1715063611" 
           alt="burger 5" 
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transation-transform duration-500 ease-in-out'/>
              <div className='absolute inset-0 bg-gradient-to-b from-grey-900/5 '></div>
                <h3 className='z-10 text-2xl font-medium text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>{""}
                 Chessy Delights{""}
            </h3>
               
              
              
              
              
              
              



              </a>

            </div>
  
            



             </div>

          </div>

      

      </section>

     </div>
    
  );
}

export default Carousel
