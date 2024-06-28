import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className='bg-stone-100 text-center shadow-md h-full'>
        <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-1 text-stone-600'>About NayaNivas</h1>
      <p className='mb-4 text-stone-500'>Welcome to NayaNivas, your one-stop destination for all property needs. Buy, sell, or rent seamlessly with us!
<br/>
At NayaNivas, we've crafted a user-friendly, comprehensive website to meet all your real estate needs seamlessly. Whether you're searching for your dream home, looking to invest, or selling a property, our platform offers intuitive tools and expert guidance every step of the way. Explore a vast range of listings, tailored to suit every taste and budget. Join NayaNivas today and experience a new era in real estate convenience.</p>
<br/>
<h1 className='text-3xl font-bold mb-1 text-stone-600'>What We Offer:</h1>
<ul className='mb-1 text-stone-500'>
        <li><strong className=' text-stone-600'>Extensive Listings:</strong> Discover diverse properties for sale and rent, catering to various tastes and budgets—from cozy apartments to luxurious homes.</li>
        <li><strong className=' text-stone-600'>Connect with Ease:</strong> Our platform allows you to directly connect with property owners and buyers, facilitating transparent and hassle-free communication.</li>
        <li><strong className=' text-stone-600'>User-Friendly Interface:</strong> Our easy-to-navigate website ensures that you can find what you're looking for without any hassle. Advanced search filters help you narrow down your options quickly.</li>
        {/* <li><strong className=' text-stone-600'>Secure Transactions:</strong> We prioritize your safety and security, ensuring that all transactions and communications are protected and trustworthy.</li> */}
      </ul>
      <br/>
      <h1 className='text-3xl font-bold mb-1 text-stone-600'>Why Choose Us?</h1>
      <ul className='mb-1 text-stone-500'>
        <li><strong className=' text-stone-600'>Expertise and Experience:</strong> With years of experience in the real estate industry, we bring you a wealth of knowledge to help you make informed decisions.</li>
        <li><strong className=' text-stone-600'>Comprehensive Support:</strong> Our dedicated support team is always ready to assist you at every step of your property journey, from listing to closing deals.</li>
        <li><strong className=' text-stone-600'>Innovative Solutions:</strong> We constantly strive to innovate and improve our platform to offer you the best real estate experience possible.</li>
      </ul>
      <br/>
      
     
      <div className="flex flex-col items-center justify-center mt-3 p-8 bg-stone-50 shadow-md rounded-lg">
      <h1 className='text-3xl font-bold mb-1 text-stone-600'>About Developer</h1><br/>
      <img src="https://rishavs001.github.io/image/rishav.jpg" alt="Rishav Shah" className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-2xl text-stone-700 font-bold">Rishav Shah</h2>
      <h3 className="text-amber-800">FULL Stack Developer</h3>
      <p className="text-center text-stone-600 italic mt-2">"Combining tech innovation and real estate savvy to revolutionize your property journey."</p>
      <div className="flex space-x-4 mt-4">
        <a href="mailto:official.rishavs@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaRegEnvelope    />
        </a>
        <a href="https://www.linkedin.com/in/rishav97/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
      </div>
    </div>

    </div>
    </div>
    
  )
}
