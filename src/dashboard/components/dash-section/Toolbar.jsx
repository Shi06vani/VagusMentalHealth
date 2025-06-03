import React, { useRef } from "react";
// import { Camera, Link, Bold, Italic, Plus } from "lucide-react";
import camera from "../../../dashboard/assets/icons/cameraaa.svg";
import bold from "../../../dashboard/assets/icons/bold-journal.svg";
import italic from "../../../dashboard/assets/icons/italic-journal.svg";
import aatachmnet from "../../../dashboard/assets/icons/attachment-journal.svg";
import add from "../../../dashboard/assets/icons/add.svg";
import underline from "../../../assets/icons/underline.svg"
const Toolbar = ({ editor, onImageUpload, saveJournal }) => {
  if (!editor) return null;

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Programmatically trigger file input
  };

  return (
    <>  
    {/* <div className="flex gap-2 mb-2 border p-2 rounded bg-gray-100 flex-wrap">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-white border"}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white border"}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-2 py-1 rounded ${editor.isActive("underline") ? "bg-blue-500 text-white" : "bg-white border"}`}
      >
        Underline
      </button>

      <label className="cursor-pointer px-2 py-1 bg-white border rounded">
        📷 Upload Image
        <input
          type="file"
          onChange={onImageUpload}
          className="hidden"
          accept="image/*"
        />
      </label>
    </div> */}

<div className="flex justify-center my-10 space-x-4">
            {/* <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <img src={camera} alt="" className="  w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button> */}
            <button
        type="button"
        onClick={handleButtonClick}
        className={`p-3 rounded-full shadow-md hover:bg-gray-100 `}
      >
        <img
          src={aatachmnet}
          alt="upload"
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
        />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={onImageUpload}
        accept="image/*"
        className="hidden"
      />
            
            <button className={`p-3 rounded-full shadow-md hover:bg-gray-100 ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white border"}`}
            onClick={() => editor.chain().focus().toggleBold().run()} >
              <img src={bold} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className={`p-3 rounded-full shadow-md hover:bg-gray-100 ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white border"}`}
            onClick={() => editor.chain().focus().toggleUnderline().run()} >
              <img src={underline} alt="underline" />
            </button>
            <button className={`p-3 rounded-full shadow-md hover:bg-gray-100 ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white border"}`}
            onClick={() => editor.chain().focus().toggleItalic().run()} >
              <img src={italic} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 flex items-center gap-2" onClick={saveJournal} >
              <img src={add} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
              Save
            </button>
          </div>
    </>
  );
};

export default Toolbar;
