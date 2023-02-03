import React, { useState } from 'react'
import RoundedBtn from './Common/RoundedBtn'
import {MdPeopleAlt} from 'react-icons/md'
import {TbCircleDashed} from 'react-icons/tb'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {HiDotsVertical} from 'react-icons/hi'
import {BiFilter} from 'react-icons/bi'
import { pp } from '../assets/whatsapp'
import Chats from './Chats'


function LeftMenu({user}) {
    const [filter, setFilter] = useState(false);
    return (
    <div className='flex flex-col border-neutral-700 w-full '>
        {/* Profile nav */}
        <div className='sticky top-0'>
        <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-3'>
            <div className='flex'>
                <img src={pp} className='rounded-full w-[40px] mr-1' alt="Profile_picture" />
                <p className='text-white mt-1'>{`${user.firstName} ${user.lastName}`}</p>
            </div>
            <div className='flex justify-between w-[175px]'>
                <RoundedBtn icon={<MdPeopleAlt/>} />
                <RoundedBtn icon={<TbCircleDashed/>}/>
                <RoundedBtn icon={<BsFillChatLeftTextFill/>}/>
                <RoundedBtn icon={<HiDotsVertical/>}/>
            </div>
        </div>
        {/* SearchBar and Filter */}
        <div className='flex justify-between items-center h-[60px] p-2 bg-[#111a21]'>
            {/* SearchBar */}
            <input type="text" placeholder='Search or start a new chat' className='rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none py-2 px-4 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light'/>
            {/* FilterButton */}
            {/* <button onClick={()=>setFilter(!filter)} className={`text-2xl m-2 p-1 rounded-full ${filter ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700" : "text-[#8796a1] hover:bg-[#3c454c]"}`}><BiFilter/></button> */}
            <button  className={`text-2xl m-2 p-1 rounded-full ${filter ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700" : "text-[#8796a1] hover:bg-[#3c454c]"}`}><BiFilter/></button>
        </div>
        </div>
        {/* Chats */}
        <Chats filter={filter}/>
        
    </div>
  )
}

export default LeftMenu