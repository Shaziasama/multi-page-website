
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";


const ProductMenu = () => {
const productImages=[
    "https://img.freepik.com/premium-photo/cheeseburger-black-background_124507-6765.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyQvlAzwdwrDU4ISV9wyUbih4DDYjfCkCgIn1QYwh6F-xDY_2OcxzPmLljNHwYIjspX4&usqp=CAU",

    "https://img.pikbest.com/photo/20240922/doubledecker-burger-with-bacon-cheese-_10875808.jpg!w700wp",

    "https://media.istockphoto.com/id/1316673633/photo/close-up-of-hamburger-with-black-background.jpg?s=612x612&w=0&k=20&c=Y7rl6pmy7N8JFmNQPtbhkZk5WHMDNjinvvmyGB2EH94=",


    "https://img.freepik.com/premium-photo/hamburger-rustic-kitchen-food-photography_134032-16926.jpg",

    "https://i.pinimg.com/564x/04/7c/ce/047cce9e90cb1a3f7ba2977608b6bea3.jpg",

    
];
return(
    <div className='relative text-center p-10'>
        <div className="absolute inset-0"
        style={{

        backgroundImage:`Url('  
    "https://img.freepik.com/premium-photo/cheeseburger-black-background_124507-6765.jpg"')`,
    backgroundSize:"cover",
    backgroundPosition:"center",
        zIndex:"0",
        opacity:"0.1"
        }}/>
            <h1 className='font bold text-4xl mb-4 text-white z-10 relative'>Most Demanded Items</h1>
            <h1 className='text-white z-10 relative'>Oder Now</h1>
            <section
            id='Projects'
            className='w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5'>
       {Array.from({length:6}).map((_,index) => (
        <div
        key={index}
        className='w-70 bg-white rounded-xl duration-500 hover:scale-105 shadow-xl z-10 relative'>
            <a href="#">
                <img src={productImages[index]} 
                alt={`prodeuc ${index +1}`}
                className='h-72 w-72 object-cover rounded-t-xl'/> 
            <div className='px-4 py-3 w-72'>
                <span className='text-slate-600 mr-3 upperCase text-xs'>Category</span>
                <p className='text-lg font-b text-red-600 truncate block capitalize'>Burger Name {index + 1}</p>
            
            <div className='flex items-center'>
                <p className='text-lg font-semibold text-black my-3 cursor-auto'>$149</p>
                <del>
                    <br />
                    <p className='text-sm text-black cursor-auto ml-2'>
                        {""} $199</p>
                </del>
                <div  className='ml-auto '>
                <FaCartShopping className='w-5 h-5 text-orange-600 ' />

                </div>

            </div>
            </div>
            
            
            </a>

        </div>
       ))}
            </section>


        </div>
    

)
}
export default ProductMenu;


