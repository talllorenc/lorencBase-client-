import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const CopyToClipboardButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <button onClick={handleCopyClick}>
      {isCopied ? (
        <div className="flex items-center text-green-500 gap-1 font-bold">
          <FaCheck className="" />
          Copied
        </div>
      ) : (
        <FaCopy className="text-xl cursor-pointer" />
      )}
    </button>
  );
};

export default CopyToClipboardButton;
