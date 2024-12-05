import React from 'react';
import transparancy from '../assets/Photo/transparancy.jpg'
import Experts from '../assets/Photo/Experts.jpg'
import Equipped from '../assets/Photo/Equipped.jpg'
import QA from '../assets/Photo/QA.jpg'

const WhyCompany = () => {
  return (
<div>

<div className='flex pl-8'>

{/* 
start why company */}

<div>

  <h1 className='font-bold text-3xl pt-12 '>Why Urban Company?</h1>
{/* first section start */}
  <div className='flex pt-16'>
    <div>
    <img src={transparancy} alt="transoarancy" srcset=""  className='h-18 w-20 '/>
    </div>

    <div className='pt-4 pl-4'>
<h1 className='font-bold '>Transparent pricing</h1>
<h3 className='text-gray-500'> See fixed prices before you book. No hidden charges.</h3>
    </div>
  </div>
  {/* first section end */}

{/* Second section start */}
<div className='flex pt-8'>
<div>
    <img src={Experts} alt="Experts" srcset=""  className='h-18 w-20 '/>
    </div>

    <div className='pt-4 pl-4'>
<h1 className='font-bold '>Experts</h1>
<h3 className='text-gray-500'>Our professionals are well trained and have on-job expertise.</h3>
    </div>
    </div>

  {/* Second section end */}


  {/* third section start */}
  <div className='flex pt-8'>
<div>
    <img src={Equipped} alt="Equipped" srcset=""  className='h-18 w-20 '/>
    </div>

    <div className='pt-4 pl-4'>
<h1 className='font-bold '>Fully equipped</h1>
<h3 className='text-gray-500'>We bring everything needed to get the job done well.</h3>
    </div>
    </div>

  {/* third section end */}


</div>


{/*  why company End */}


 {/* quality assurace start */}

<div className='flex-1 bg-blue-50 ml-36 mr-28 mb-10 mt-12 rounded-lg'>

  <div className='mt-10 ml-8'>
<img src={QA} alt="" srcset="" className='h-32 w-18 ml-2'/>




<h1 className='font-bold text-3xl mt-10 '>100% Quality Assured</h1>
<h3 className='text-gray-500 mt-5 '>If you don’t love our service, we will make it.</h3>

</div>

</div>

{/* end quality assurance */}


</div>


</div>



    
  )
}

export default WhyCompany