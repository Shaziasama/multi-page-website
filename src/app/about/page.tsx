import Image from "next/image"
const About = () => {
    return (
      <div> <h1 className="text-4xl justify-center items center pt-8 font-bold">Our website uses a burger menu (☰) to help you easily access different sections, such as:

      </h1>
        <div className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="pic"
        src="./images/burger.jpg"
        width={300}
        height={300}
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-800 hover:text-red-500">
          Home
          <br />
          
          About
          <br />
          Contact
          <br />
          
        </h1>
        <p className="mb-8 leading-relaxed text-black font-3xl font-bold">
        On smaller screens, this menu keeps everything organized and clean. Simply click the burger icon to expand and navigate through the options.
        <br />
        For any information or to get in touch, feel free to use the menu




        </p>
        
        </div>
      </div>
  </div>
  </div>
  
    )
  }
  
  export default About
  