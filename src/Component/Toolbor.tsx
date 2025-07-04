import React, { useState } from 'react';
// Import your icons here
import { FaTable,  FaPlus } from 'react-icons/fa';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
import { BiSortAlt2 } from "react-icons/bi";
import { CgSortAz } from "react-icons/cg";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { BiArrowToTop } from "react-icons/bi";
const Toolbar: React.FC = () => {
  // Active button state
  const [activeButton, setActiveButton] = useState<string>('Tool Bar');

  // Toolbar button config
  const LefttoolbarItems = [
    { icon: <RiArrowRightDoubleLine />, label: 'Tool Bar', },
    { label: 'Hide Fields', icon: <VscEyeClosed /> },
    { label: 'Sort', icon: <BiSortAlt2 /> },
    { label: 'Filter', icon: <CgSortAz /> },
    { label: 'Cell View', icon: <FaTable /> },

  ];
  const RightToolbarItems = [
    { label: 'Import', icon: <LiaDownloadSolid /> },
    { label: 'Export', icon: <BiArrowToTop /> },
    { label: 'Share', icon: <FaRegShareFromSquare /> },
  ]

  // Handle button click
  const handleButtonClick = (label: string) => {
    setActiveButton(label);
    console.log(`${label} clicked`);
  };

  return (
    <div className="flex items-center flex-wrap gap-2 bg-white px-4 py-2 border-b border-gray-200">
      <div className="flex items-center gap-2">
        {LefttoolbarItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleButtonClick(item.label)}
            className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded ${activeButton === item.label
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
              } transition`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Buttons */}
      <div className="flex items-center gap-2">
        {RightToolbarItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleButtonClick(item.label)}
            className="flex items-center border gap-1 text-sm px-3 py-1.5 rounded text-gray-700 hover:bg-gray-100 transition"
          >
            {item.icon}
            {item.label}
          </button>
        ))}

        {/* New Action button */}
        <button
          className="ml-auto flex items-center gap-1 bg-green-900 text-white text-sm px-4 py-1.5 rounded hover:bg-green-700 transition" onClick={()=> console.log("New action button clikced.")}
        >
          <FaPlus />
          New Action
        </button>
      </div>
      </div>
      );
};

      export default Toolbar;
