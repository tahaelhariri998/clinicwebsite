"use client";
import React from "react";

type DropdownMenuProps = {
  isVisible: boolean;
  options: string[];
  onSelect: (option: string) => void;
};

export default function DropdownMenu({
  isVisible,
  options,
  onSelect,
}: DropdownMenuProps) {
  if (!isVisible) return null;

  return (
    <ul   >
        
      {options.map((option, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => onSelect(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
