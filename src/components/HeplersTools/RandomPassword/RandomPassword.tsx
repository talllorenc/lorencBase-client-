"use client";

import CopyToClipboardButton from "@/components/CopyToClipboardButton/CopyToClipboardButton";
import { useState } from "react";
const RandomPassword = () => {
  const [password, setPassword] = useState("");
  const [isNumberSelected, setIsNumberSelected] = useState(false);
  const [isUppercaseSelected, setIsUppercaseSelected] = useState(false);
  const [isSymbolSelected, setIsSymbolSelected] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);

  const symbols = "$%&()><?@";

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (isNumberSelected) {
      characters += "0123456789";
    }
    if (isUppercaseSelected) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (isSymbolSelected) {
      characters += "$%&()><?@";
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(password);
  };

  return (
    <div className="max-w-2xl mx-auto shadow-buttonMainBrick rounded-lg p-4 bg-[#FAF0E6] text-[#001a2c]">
      <div className="w-full border-2 border-[#001a2c] p-2">
        {password.length > 0 ? (
          <div className="flex items-center justify-between">
            <p className="font-bold">{password}</p>
            <CopyToClipboardButton text={password}/>
          </div>
        ) : (
          <p className="font-bold">Random Password</p>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between font-medium text-lg">
            <label className="">Password length</label>
            <p>{passwordLength}</p>
          </div>

          <input
            type="range"
            min={5}
            max={16}
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between font-medium text-lg">
            <label>Numbers:</label>
            <input
              type="checkbox"
              checked={isNumberSelected}
              onChange={() => setIsNumberSelected(!isNumberSelected)}
            />
          </div>
          <p>0-9</p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between font-medium text-lg">
            <label>Uppercase Letters:</label>
            <input
              type="checkbox"
              checked={isUppercaseSelected}
              onChange={() => setIsUppercaseSelected(!isUppercaseSelected)}
            />
          </div>
          <p>A-Z</p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between font-medium text-lg">
            <label>Symbols:</label>
            <input
              type="checkbox"
              checked={isSymbolSelected}
              onChange={() => setIsSymbolSelected(!isSymbolSelected)}
            />
          </div>
          <p>{symbols}</p>
        </div>
      </div>

      <button
        className="w-full mt-4 text-lg bg-[#001a2c] text-[#FAF0E6] p-2 transition-all duration-200 cursor-pointer font-bold hover:shadow-buttonMainDarkBrick"
        onClick={generatePassword}
      >
        GENERATE
      </button>
    </div>
  );
};

export default RandomPassword;
