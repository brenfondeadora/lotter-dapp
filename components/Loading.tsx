import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex items-center space-x-2 mb-10'>
            <img 
                className='rounded-full h-20 v-20 m-5'
                src="https://i.pravatar.cc/100?img=5"
                alt="" 
            />
            <h1 className='text-white font-bold'>Loading the BRSACA DRAW</h1>
        </div>
        <PacmanLoader color="white" size={30} />
    </div>
  )
}

export default Loading