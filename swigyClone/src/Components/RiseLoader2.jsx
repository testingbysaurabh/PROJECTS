import { RiseLoader } from 'react-spinners';
import React from 'react'

const RiseLoader2 = () => {
  return (
    <div className='h-[88vh] flex justify-center items-center'>
      <RiseLoader
  color="#FF5200"               
  loading={true}                
  size={70}                     
  speedMultiplier={1}          
  cssOverride={{
    margin: "50px auto",       
    display: "block"           
  }}
/>
    </div>
  )
}

export default RiseLoader2