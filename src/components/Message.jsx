import React from 'react'
function Message({msg,name}) {
    return (
        
        //Message container
    <div className='flex flex-col'>
    <p className={`${msg.userId!==name ? "mr-auto  text-white text-sm font-bold":"ml-auto text-white text-sm font-bold"}`}>{msg.userId}</p>
    <div className={`flex justify-center items-center rounded-md w-fit my-1 ${msg.userId!==name ? "bg-[#202d33] mr-auto":"bg-[#005c4b] ml-auto"}`}>
    {msg.img? (
        <div className='relative w-full p-2'>
            <img className='rounded-md max-w-[270px] w-full' src={msg.img} alt="imgmessage" />
            <p className='absolute right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px]'>
                {msg.time}
            </p>
        </div>
        ):(<div className='flex justify-between items-end max-w-[410px] p-2' style={{wordBreak:"break-word"}} >
            {msg.isLink?(
                <a href={msg.msg} target='_blank' className='mr-2 text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm hover:underline '>
                    {msg.msg}
                </a>
            ):(
                <p className='text-white text-sm mr-2'>{msg.message}</p>
            )}
            <p className='text-[#8796a1] text-[10px] min-w-[50px]'>
                {msg.time}
            </p>
        </div>)
}
    </div>
    </div>
  )
}

export default Message