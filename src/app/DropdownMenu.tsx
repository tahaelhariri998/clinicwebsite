"use client";
import React from "react";

type DropdownMenuProps = {
  isVisible: boolean;
  options: string[];
  logos?: string[]; // Optional logos array
  onSelect: (option: string) => void;
};

export default function DropdownMenu({
  isVisible,
  options,
  logos = [], 
  onSelect,
}: DropdownMenuProps) {
  if (!isVisible) return null;

  return (
    <ul   >
        
      {options.map((option, index) => (
        <li
          key={index}
          className="flex flex-row-reverse items-buttom  py-4 hover:bg-gray-200  z-0 "
          onClick={() => onSelect(option)}
        >
          {logos && logos[index] && (
            <img
              src={logos[index]}
              alt={`Logo for ${option}`}
              className=" flex w-[15%] h-[15%]  " // Adjust size and spacing
            />
          )}
          <span className="text-lang2  ">{option}</span> {/* Add custom font class */}
        </li>
      ))}
    </ul>
  );
}
