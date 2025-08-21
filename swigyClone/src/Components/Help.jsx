import { GoogleGenerativeAI } from "@google/generative-ai";
import { ai_prompt, api_key } from "../Utils/constant";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import ResNavbar from "./ResNavbar";



const Help = () => {
  const genAI = new GoogleGenerativeAI(api_key);
  const[userQuery, setUserQuery] = useState("")
  const[msgs, setMsgs] = useState([])
//   console.log(userQuery)

  const btnClickHandler = () => {

    if(userQuery.length == 0)
    {
        toast.error("Msg cannot be empty")
        return
    }

    setMsgs(prev => [...prev, {sender : "user", msg : userQuery}])
    async function callGemini() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${api_key}`;

  const body = {
    contents: [
      {
        parts: [
          { text: ai_prompt + userQuery }
        ]
      }
    ]
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    const resultText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    setUserQuery("")
    setMsgs(prev => [...prev, {sender : "gemini", msg : resultText}])
    // console.log(resultText);
    return resultText;

  } catch (err) {
    console.error("Error calling Gemini:", err);
    return "Failed to fetch from Gemini";
  }
}

callGemini();
  }

 




  return <div>
    <ResNavbar />

            
    <div className="w-full  max-w-md mx-auto mt-22 flex flex-col h-[60vh] rounded-2xl shadow-lg overflow-hidden bg-gray-100">
  <div className="flex-1 overflow-y-auto p-4 space-y-3">
    {/* <div className="self-start bg-white px-4 py-2 rounded-lg shadow-sm text-sm max-w-[75%]">
      Hello! How can I help you today?
    </div>
    <div className="self-end bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm text-sm max-w-[75%]">
      I need help with my order.
    </div> */}
    {msgs.length > 0 && msgs.map((item) => {
        if(item.sender == "gemini")
        {
            return (
                <div className="self-start bg-white px-4 py-2 rounded-lg shadow-sm text-sm max-w-[75%]">
                    {item.msg}
                </div>
            )
        }
        else
        {
            return (
                 <div className="self-end bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm text-sm max-w-[75%]">
                    {item.msg}
                    </div>
            )
        }
    })}
  </div>

  <div className="p-3 flex items-center gap-2">
    <input
    onChange={(e) => {
        setUserQuery(e.target.value)
    }}
    value={userQuery}
      type="text"
      placeholder="Type your message..."
      className="flex-1 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
     onClick={btnClickHandler} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600">
      Send
    </button>
  </div>
</div>


  </div>;
};

export default Help;