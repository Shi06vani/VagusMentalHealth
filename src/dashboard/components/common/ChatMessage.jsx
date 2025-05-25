import React from 'react';

const ChatMessage = ({
  text,
  isSender = false,
  avatar = '',
  bgColor = '#C5DFFF',
  textColor = 'text-gray-700',
  icon = '✓✓',
  iconColor = 'text-blue-600',
}) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'items-start gap-2'} `}>
      {!isSender && avatar && (
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
      )}

      <div
        className={`px-4 py-2.5 sm:py-4 rounded-2xl flex flex-col justify-end items-end max-w-[77%] lg:max-w-[60%] shadow-sm ${isSender ? 'rounded-br-sm' : 'rounded-tl-sm'}`}
        style={{ backgroundColor: isSender ? bgColor : '#fff' }}
      >
        <p className={`${textColor} text-sm lg:text-base `}>{text}</p>
        {isSender && (
           <img src={icon} alt=""  className={`text-xs ${iconColor} w-5 h-5 text-right mt-1`} />
          
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
