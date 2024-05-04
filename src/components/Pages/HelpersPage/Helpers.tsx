"use client";

import React, { useState } from "react";
import HelpersMenu from "../../HelpersMenu/HelpersMenu";
import RandomPassword from "../../HeplersTools/RandomPassword/RandomPassword";
import CryptoRandom from "../../HeplersTools/CryptoRandom/CryptoRandom";
import RestApi from "../../HeplersTools/RestApi/RestApi";

const Helpers = () => {
  
  const [selectedBlock, setSelectedBlock] = useState("");

  const handleBlockClick = (blockName: React.SetStateAction<string>) => {
    setSelectedBlock(blockName);
  };

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <h1 className="text-center text-6xl font-bold">HELPERS</h1>
      <div className="mt-8 flex flex-col">
        <HelpersMenu
          handleBlockClick={handleBlockClick}
          selectedBlock={selectedBlock}
        />
        <div className="mt-4">
          {selectedBlock === "RandomPassword" && <RandomPassword />}
          {selectedBlock === "CryptoRandom" && <CryptoRandom />}
          {selectedBlock === "RestApi" && <RestApi />}
        </div>
      </div>
    </div>
  );
};

export default Helpers;
