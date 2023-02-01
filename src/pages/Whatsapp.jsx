import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ChatDetail from '../components/ChatDetail'
import LeftMenu from '../components/LeftMenu'
import LoadingScreen from '../components/LoadingScreen';
import Pusher from 'pusher-js'
import axios from '../service/axios'


function Whatsapp() {
  const [progress, setProgress] = useState(0);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const id=setTimeout(()=>{
      if(progress>=100) setLoading(false);
      else{
        const increment=Math.floor(Math.random()*(10+1))+7
        setProgress(progress+increment)
      }
    },300);
    return()=>clearTimeout(id)
  }, [progress]);
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/api/v1/messages/sync')
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
  console.log(messages);
  return (
    <>
    {loading ? (<LoadingScreen progress={progress} />):(
    //main container
    <div className='w-screen h-screen overflow-hidden'>
        <div className='flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen'>
            <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-full h-screen overflow-y-auto">
                <LeftMenu/>
            </div>
            <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-full h-screen">
                <ChatDetail msg={messages}/>
            </div>
        </div>
    </div>
    )}
    
    </>
  )
}

export default Whatsapp