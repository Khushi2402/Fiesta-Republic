import React from 'react'
import bgImg from '../assets/about.jpg'
import founder from '../assets/founder.png'
import co1 from '../assets/co1.png'
import co2 from '../assets/co2.png'

const About = () => {
  return (
    <div name='about'>
      <h1 className='text-2xl pt-20'>About Us</h1>
      <p className='w-full px-10 pt-10 text-xl underline underline-offset-auto font-semibold'>Creating unforgettable experiences, one event at a time.</p>
      <div className='flex justify-center md:items-end w-full px-10 pt-8'>
        <p className='text-justify text-xl'>We don't just plan events, we orchestrate experiences that evoke emotions, foster connections, and create memories that last a lifetime.</p>
      </div>
      <div class='card'>
      <div class='p-10 img-container grid md:grid-cols-3 m-auto justify-centerw-auto h-auto'>
        <div className='pb-2'>
        <img src={founder} className='justify-center justify-self-center mx-auto' alt="" />
        <h1 className='text-lg'>Sumit Kapasi</h1>
        <p>Founder</p>
        </div>
        <div className='pb-2'>
        <img src={co1} className='justify-center justify-self-center mx-auto' alt="" />
        <h1 className='text-lg'>Henry</h1>
        <p>Co-Founder</p>
        </div>
        <div className='pb-2'>
        <img src={co2} className='justify-center justify-self-center mx-auto' alt="" />
        <h1 className='text-lg'>Sumit Kapasi</h1>
        <p>Co-Founder</p>
        </div>  
      </div>
      </div>
    </div>
  )
} 

export default About
