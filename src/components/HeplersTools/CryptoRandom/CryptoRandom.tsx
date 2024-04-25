"use client";

import { useState } from "react";
import CopyToClipboardButton from "@/components/CopyToClipboardButton/CopyToClipboardButton";
import crypto from "crypto";

const CryptoRandom = () => {
  const [randomString, setRandomString] = useState("");
  const [hexLength, setHexLength] = useState(0);

  const generateRandomString = () => {
    const newRandomString = crypto.randomBytes(hexLength).toString("hex");
    setRandomString(newRandomString);
  };

  return (
    <div className="max-w-2xl mx-auto shadow-buttonMainBrick rounded-lg p-4 bg-[#FAF0E6] text-[#001a2c]">
      <div className="w-full border-2 border-[#001a2c] p-2">
        {randomString ? (
          <div className="flex items-center justify-between">
            <p className="font-bold break-all">{randomString}</p>
            <CopyToClipboardButton text={randomString} />
          </div>
        ) : (
          <p className="font-bold">Random Crypto</p>
        )}
      </div>

      <div className="flex mt-4">
        <div className="flex gap-4 font-bold">
          <button
            className={`border-2 border-[#001a2c] px-2 rounded-md ${
              hexLength === 8 ? "bg-[#001a2c] text-[#FAF0E6]" : ""
            }`}
            onClick={() => setHexLength(8)}
          >
            8
          </button>
          <button
            className={`border-2 border-[#001a2c] px-2 rounded-md ${
              hexLength === 16 ? "bg-[#001a2c] text-[#FAF0E6]" : ""
            }`}
            onClick={() => setHexLength(16)}
          >
            16
          </button>
          <button
            className={`border-2 border-[#001a2c] px-2 rounded-md ${
              hexLength === 32 ? "bg-[#001a2c] text-[#FAF0E6]" : ""
            }`}
            onClick={() => setHexLength(32)}
          >
            32
          </button>
          <button
            className={`border-2 border-[#001a2c] px-2 rounded-md ${
              hexLength === 64 ? "bg-[#001a2c] text-[#FAF0E6]" : ""
            }`}
            onClick={() => setHexLength(64)}
          >
            64
          </button>
        </div>
      </div>

      <button
        className="w-full mt-4 text-lg bg-[#001a2c] text-[#FAF0E6] p-2 transition-all duration-200 cursor-pointer font-bold hover:shadow-buttonMainDarkBrick"
        onClick={generateRandomString}
      >
        GENERATE
      </button>
    </div>
  );
};

export default CryptoRandom;
