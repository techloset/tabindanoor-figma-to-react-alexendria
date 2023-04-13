import React from 'react'
import './HandSection.css'
const HandSection = () => {
  return (
    <div>
        <div className='section'>
    <div className='flex w-full justify-center items-center'>
      <img src="https://alexandria-web-dev.vercel.app/static/media/Group%202.0646716d4b8b35646725.png" alt="" />
    </div>
    <div className='center'>
      <h1>SUBSCRIBE</h1>
      <p>Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
    </div><br />
    <div className='items-center text-center'>
      <input className='input' type="text" placeholder="Enter your email address" />
      <button className='button'>Send</button><br /><br />
    </div>
  </div>
    </div>
  )
}

export default HandSection
