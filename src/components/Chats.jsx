import React,{useState,useEffect} from 'react'
import {ImFolderDownload} from 'react-icons/im'
import { chatsData } from '../data/whatsapp'
import Chat from './Chat'

function Chats({filter}) {
  const[chats,setChats]=useState(chatsData);
  useEffect(() => {
    const newChats=filter ? chatsData.filter((chat)=>chat.unreadMsgs) : chatsData
    setChats(newChats)
}, [filter]);
    return (
    <div className='flex flex-col cursor-pointer'>
        {/* Archieved container */}
        <div className='flex justify-between items-center w-full min-h-[55px] px-3 hover:bg-[#202d33]'>
            {/* icon and text container */}
            <div className='flex justify-around items-center w-[150px]'>
                <span className='text-emerald-500 text-lg'>
                <ImFolderDownload/>
                </span>
                <h1 className='text-white'>Archieved</h1>
            </div>
            {/* number of archieved chats */}
            <p className='text-emerald-500 text-xs font-light'>7</p>
        </div>
        {/* Chats */}
            {chats.map((chat,i)=>(
            <Chat 
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i===0}
            />
        ))}
    </div>
  )
}

export default Chats