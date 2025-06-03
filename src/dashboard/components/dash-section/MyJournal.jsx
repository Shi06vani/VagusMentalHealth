import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";
import axios from "axios";
const API = import.meta.env.VITE_BASE_URL;

const MyJournal = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
      bulletList: false,
      orderedList: false,
    }), Underline, Image],
    content: "<p></p>",
  });
const userId = "683aa0db091b52f071081c75";
  const saveJournal = async () => {
    const html = editor?.getHTML();
    await axios.post(`${API}/journal/save`, {
      userId,
      content: html,
    });
    alert("Journal saved");
  };

const uploadImage = async (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "vagus_unsigned_preset"); // Your preset name

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dinrgqewt/image/upload",
      formData
    );

    const imageUrl = res.data.secure_url;

    editor.chain().focus().setImage({ src: imageUrl }).run();
    alert("Image uploaded and inserted successfully!");
  } catch (error) {
    console.error("Image upload failed:", error);
    alert("Image upload failed. Please try again.");
  }
};

console.log("editor=========",editor?.getHTML())
  return (
  <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Journal</h2>
      <EditorContent editor={editor} className="editor-box" />
      <Toolbar editor={editor} onImageUpload={uploadImage} saveJournal={saveJournal} />
      {/* <button
        onClick={saveJournal}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Journal
      </button> */}
    </div>
  );
};

export default MyJournal;
