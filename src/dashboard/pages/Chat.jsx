import React from 'react'
import ChatMessage from '../components/common/ChatMessage'
import attachment from "../../dashboard/assets/icons/attachment.svg"
import ChatDetails from '../components/dash-section/ChatDetails';
import tick from  "../../dashboard/assets/icons/message_tick.svg"
const messages = [
  {
    id: 1,
    text: "I’ve been feeling really overwhelmed at work. No matter how much I do, it never feels enough.",
    isSender: true,
  },
  {
    id: 2,
    text: "That sounds exhausting. Have you noticed any particular triggers for this feeling?",
    isSender: false,
    avatar: "https://i.pravatar.cc/40",
  },
  {
    id: 3,
    text: "Mostly deadlines and constant pressure to perform. I'm scared of failing. Maybe this is the major reason. Let’s explore ways to manage this pressure and set healthier boundaries.",
    isSender: true,
  },
];

const Chat = () => {
  return (
    <div className='flex flex-col  lg:flex-row gap-4 '>
       <div className="min-h-screen bg-[#E9F3FF] p-3.5 sm:p-6 flex flex-col gap-9 rounded-[30px] font-poppins lg:max-w-[75%] ">
      <h2 className="text-lg sm:text-xl font-medium text-[#3E3E3E]">Jessica Thomas</h2>

      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          text={msg.text}
          isSender={msg.isSender}
          avatar={msg.avatar}
          icon={tick}
        />
      ))}

      {/* Input Box */}
      <div className="mt-auto pt-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2.5 shadow-sm">
          <span className="text-gray-400 mr-2"><img src={attachment} alt="" className=' h-5 w-5 sm:w-6 sm:h-6' /></span>
          <input
            type="text"
            placeholder="Message to Jessica Thomas"
            className="flex-1 text-sm bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>
    </div>
    <ChatDetails/>
    
   
    </div>
  )
}

export default Chat
