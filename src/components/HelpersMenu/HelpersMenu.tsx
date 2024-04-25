import React from "react";

interface IHelpersMenuProps {
  handleBlockClick: (blockName: React.SetStateAction<string>) => void;
  selectedBlock: string;
}

const HelpersMenu = ({
  handleBlockClick,
  selectedBlock,
}: IHelpersMenuProps) => {
  const menuItems = [
    { id: 1, name: "RandomPassword", label: "Password" },
    { id: 2, name: "CryptoRandom", label: "Crypto" },
    { id: 3, name: "RestApi", label: "RestAPI" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {menuItems.map((menuItem) => (
        <div key={menuItem.id} className="">
          <p
            className={`cursor-pointer p-1 border-2 border-[#FAF0E6] transition-all duration-300 rounded-lg hover:scale-105 ${
              selectedBlock === menuItem.name
                ? "shadow-buttonMainBrick bg-[#FAF0E6] text-[#001a2c] font-bold"
                : ""
            }`}
            onClick={() => handleBlockClick(menuItem.name)}
          >
            {menuItem.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HelpersMenu;
