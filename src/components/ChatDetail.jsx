import React from 'react'
import RoundedBtn from './Common/RoundedBtn'
import {MdSearch,MdSend} from 'react-icons/md'
import {HiDotsVertical} from 'react-icons/hi'
import {cs1,cs2} from "../assets/whatsapp"
import { BiHappy } from 'react-icons/bi'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
// import { messagesData } from '../data/whatsapp'
import { useState,useEffect,useRef } from 'react'
import Message from './Message'
import { getTime } from '../service/whatsapp'
import axios from '../service/axios'

function ChatDetail({msg}) {

 const [messages, setMessages] = useState(msg);
const [typing,setTyping]=useState(false);
const inputRef=useRef(null);
const BottomRef=useRef(null);
// const addMessage=(msg)=>{
//   const newMessage=[...messages,msg]
//   setMessages(newMessage);
// }

const handleInputSubmit=async ()=>{
  if(inputRef.current.value.length > 0){
  
      await axios.post("/api/v1/messages/new",{
        message:inputRef.current.value,
        name:"me",
        timestamp:'far away',
        received:false,
      });
      inputRef.current.value="";
      inputRef.current.focus();
      setTyping(false)
  }
    }

    useEffect(() => {
      BottomRef.current?.scrollIntoView({
        behavior:"smooth",
      })
    }, [msg]);
    useEffect(() => {
      const listener=(e)=>{
        if(e.code==="Enter") handleInputSubmit();
      };
      document.addEventListener("keydown",listener);
      return ()=>document.removeEventListener("keydown",listener);
    });
const handleEmojiClick=()=>{
  inputRef.current.value += "(-)"
  inputRef.current.focus();
}  
const handleImageUpload=()=>{
  addMessage({
    img:cs2,
    time:getTime(),
    sent:true
  })
}
  
const handleInputChange=()=>{
  inputRef.current.value.length===0 ? setTyping(false):setTyping(true)
}
return (
// chat details main container
  <div className='flex flex-col h-screen'>
    {/* {contact nav} */}
    <div className='flex justify-between bg-[#202d33] h-[60px] p-3'>
      {/* contact info */}
      <div className='flex items-center'>
        <img src={cs1} className='rounded-full w-[45px] h-[45px] mr-5' alt="profilepic" />
        <div className='flex flex-col'>
          <h1 className='text-white font-medium'>Coding Spot</h1>
          <p className='text-[#8796a1] text-xs'>online</p>
        </div>
      </div>
      {/* buttons */}
      <div className='flex justify-between items-center w-[85px]'>
      <RoundedBtn icon={<MdSearch/>} />        
      <RoundedBtn icon={<HiDotsVertical/>} />
      </div>
    </div>
    {/* messages section */}
    <div style={{padding:"12px 7%"}} className='h-full bg-msg bg-contain overflow-y-scroll' >
      {msg.map((msg1,i)=>(
        <Message 
        key={i}
        msg={msg1}
        />
      ))}
      <div ref={BottomRef}/>
    </div>
    {/* bottom section */}
    <div className='flex items-center bg-[#202d33] w-100 h-[70px] p-2'>
      {/* emoji btn */}
    <RoundedBtn icon={<BiHappy/>} onClick={handleEmojiClick} />
    {/* upload btn*/}
    <span className='mr-2'><RoundedBtn onClick={handleImageUpload} icon={<AiOutlinePaperClip/>} /></span>
    <input
      onChange={handleInputChange} 
      ref={inputRef}
      type="text"
      placeholder='Type a message'
      className='bg-[#2c3943] rounded-full pl-2 outline-none text-sm text-neutral-200 w-full h-full placeholder:text-sm placeholder:text-[#8796a1]'
     />
     <span className='ml-2'>
        {typing?
        <RoundedBtn icon={<MdSend/>} onClick={handleInputSubmit} />
        : 
        <RoundedBtn icon={<BsFillMicFill/>}/>
      }
            
     </span>
    </div>
  </div>
  )
}

export default ChatDetail