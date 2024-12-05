import React from 'react'
import HeroImage from '../assets/Photo/HeroImage.jpg'

const HeroSection = () => {
  return (
<div className='flex justify-between align-center bg-white '>

<div className='flex-1 relative'> 
    <img src={HeroImage} alt="HeroImage" className='h-[500px] w-[700px] '/>
    {/* <div className="absolute inset-0 bg-gradient-to-l from-[#000000] to-[#C9C9C9] opacity-60"></div> */}
</div>

<div className='flex-1 bg-black text-white pl-24 pt-14 pr-10 '>
    {/* write about company */}

    <div>
    <div>
<h2 className='text-gray-500 font-semibold text-xl'>Urban company</h2>
    </div>

<div className='pt-6 mr-5 pr-8 w-full '>
    <h2 className='text-white text-4xl font-bold'>Quality home services,on demand</h2>
</div>

<div>
<h2 className='text-gray-500 pt-6 text-xl'>Experienced, hand-picked Professionals to serve you at your doorstep.</h2>
</div>

    </div>
    <div className='bg-white text-black w-80 h-32 mt-12 ml-2 border-solid rounded-md'>
<form action="" >
<h2 className='pt-4 pl-4 text-black font-semibold'>Where do you need a service?</h2>
<div className='mt-2 border border-gray-400 rounded-md w-72 p-2 m-4'>
<select name="Select Your City" id=""  className=''>
    <option value="">India</option>
    <option value="nepal">Nepal</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
</select>
</div>

</form>
    </div>
</div>
    
</div>
)
}

export default HeroSection