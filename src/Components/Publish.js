import React from 'react'
import "../Components/Publish.css"
// import { BsDribbble } from 'react-icons/bs'
import alexndra from "../images/alexndra.png"
import publish from "../images/publish.png"
import line from "../images/line.png"
import inkpot from "../images/inkpot.png"



const Publish = () => {
  return (
    <div className=''>
    <div className='upper'>
      <br /><br />
    <h2 className=''>Want to add your work?</h2> <br />
    <button className='contact text-white'>CONTACT US</button> <br /><br /><br /><br />
    <img src={line}  alt="line" className='center' /><br />
    <h1  className='font-serif text-5xl'>Welcome to the<span className='text-purple-600'> wall of</span></h1>
    <img src={alexndra} className="center" alt="alexndra" /><br />
    <p className='w-1/4 center text-2xl'>This is where we tell you at all our hopes and aspirations. Behold the wanderer of the literary metaverse.</p><br /><br />
    <img src={line} className='center' alt="line-img" />
    <br /><br /><br /><br />
  </div>

<br /><br /><br /><br /><br />

    <div className='px-24 text-white '>
<div className="purple p-4 md:p-24 border-r-8 bg-[#7D75D8] flex flex-col md:flex-col lg:flex-row md:items-center">
  <img className="md:mr-20 mt-0 md:mt-[-200px] max-w-full md:max-w-none" src={publish} alt="Publish" />
  <div className="text-center md:text-left">
    <h2 className="font-serif text-3xl md:text-5xl">Publish a book NFT</h2><br />
    <p className="w-full md:w-1/2 text-xl md:text-2xl">Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem</p><br />
    <button className="works text-lg w-1/3">PUBLISH WORKS →</button>
  </div>
</div>


</div>

<br /><br /><br /><br />
<div className=' h-72  w-3/4  lg:w-1/3 float-left md:float-right inkpot '>  </div>
</div>
  )
}

export default Publish