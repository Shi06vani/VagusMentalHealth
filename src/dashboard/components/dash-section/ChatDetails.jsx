import { useState } from "react";
import { Bell, Info, Phone } from "lucide-react";
import attachment from  "../../../dashboard/assets/images/attachment.png"

const ChatDetails = () => {
  const [notificationOn, setNotificationOn] = useState(true);

  const attachments = [
    attachment,
    attachment,
  ];

  return (
    <div className="w-full   font-poppins  lg:max-w-xs bg-[#E9F3FF] rounded-[30px] p-6 lg:p-4 flex flex-col gap-6 text-sm text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="font-normal text-[#3E3E3E] text-[17px] sm:text-lg">Details</span>
        <Info size={18} className="text-gray-500" />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/60?img=5"
          alt="Jessica Thomas"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-normal text-[#3E3E3E] text-lg sm:text-xl">
            Jessica Thomas
          </div>
          <div className="text-xs text-[#3E3E3E] font-light">
            Last activity 1 hr ago
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* Contact Info */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span className="text-[#3E3E3E] font-normal text-sm">
            +91 844569904
          </span>
        </div>

        {/* Notification Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell size={16} />
            <span className="text-[#3E3E3E] font-normal text-sm">
              Notification
            </span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationOn}
              onChange={() => setNotificationOn(!notificationOn)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-400 transition peer-focus:ring-2 peer-focus:ring-blue-300"></div>
            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>
      </div>

      {/* Attachments */}
      <div className="">
        <div className="font-normal text-[#3E3E3E] text-[17px] sm:text-lg mb-3">Attachments</div>
        <div className="flex gap-2">
          {attachments.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`attachment-${idx}`}
              className="w-20 h-16 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
