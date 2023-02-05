import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ChatDetail from '../components/ChatDetail'
import LeftMenu from '../components/LeftMenu'
import Pusher from 'pusher-js'
import axios from '../service/axios'


function Whatsapp({user,setLogged}) {

  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/api/messages/sync')
    .then(response=>{
      setMessages(response.data)
    })
  },[])
useEffect(() => {
    //once
    const pusher = new Pusher('eb05ff1342e028941747', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);
  return (
    <>
    <div className='w-screen h-screen overflow-hidden'>
        <div className='flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen'>
            <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-full h-screen overflow-y-auto">
                <LeftMenu user={user} setLogged={setLogged} />
            </div>
            <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-full h-screen">
                <ChatDetail user={user} msg={messages}/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Whatsapp