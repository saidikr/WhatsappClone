import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import fav from '/favicon.ico'
import { FaLock } from 'react-icons/fa'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.css'



function LoadingScreen({progress}) {
  return (
    <div className='flex flex-col justify-center items-center bg-[#111a21] w-screen h-screen'>
        {/* whatsapp icon */}
        <span className='text-[#3d464a] text-6xl my-12'>
            {/* <BsWhatsapp/> */}
            <img src={fav} className="w-28 h-28" alt="" />
        </span>
        {/* loading bar and text */}
        <div className='flex flex-col justify-evenly items-center h-[150px]'>
            <ProgressBar variant='success' now={progress} className='bg-[#243138] rounded-lg w-[320px] h-[3px]' />
            <div className='flex flex-col items-center'>
                <h1 className='text-[#c1c6c9] text-lg font-medium'>ChatMessagApp</h1>
                <div className='flex items-center text-[#687782]'>
                    <span className='text-sm mr-3'>
                        <FaLock/>
                    </span>
                    <p>End-to-End Encrypted</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingScreen