import React, { useState } from "react";

interface InputProps {
  onSend: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ onSend }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    onSend(question);
    setQuestion("");
  };

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-3">
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            value={question}
            type="text"
            className="flex w-full border rounded-xl focus:outline-none border-primary hover:border-secondary pl-4 h-10"
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={e => {
              e.key === 'Enter' ? handleSubmit() : null
            }}
          />
        </div>
      </div>
      <div className="ml-4">
        <button
          onClick={handleSubmit}
          type="submit"
          className="flex items-center justify-center bg-gradient-4 hover:bg-gradient-5 rounded-xl text-white px-4 py-1 flex-shrink-0"
        >
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-8 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Input;
