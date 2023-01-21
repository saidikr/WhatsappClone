import React from 'react'
import ChatDetail from '../components/ChatDetail'
import LeftMenu from '../components/LeftMenu'

function Whatsapp() {
  return (
    //main container
    <div className='w-screen h-screen overflow-hidden'>
        <div className='flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen'>
            <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-full h-screen overflow-y-auto">
                <LeftMenu/>
            </div>
            <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-full h-screen">
                <ChatDetail/>
            </div>
        </div>

    </div>
  )
}

export default Whatsapp