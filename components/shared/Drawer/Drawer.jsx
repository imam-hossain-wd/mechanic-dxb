"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export const Drawer = ({ isOpen, onClose, children, position = "right" }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const positionClasses = {
    right: {
      container: "right-0 top-0 h-full",
      transform: "translate-x-full",
      transformOpen: "translate-x-0",
    },
    left: {
      container: "left-0 top-0 h-full",
      transform: "-translate-x-full",
      transformOpen: "translate-x-0",
    },
    top: {
      container: "top-0 left-0 w-full",
      transform: "-translate-y-full",
      transformOpen: "translate-y-0",
    },
    bottom: {
      container: "bottom-0 left-0 w-full",
      transform: "translate-y-full",
      transformOpen: "translate-y-0",
    },
  };

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        className={`
          fixed inset-0 z-40 transition-all duration-300 ease-in-out
          ${isOpen 
            ? "bg-black/50 backdrop-blur-sm opacity-100 visible" 
            : "bg-black/0 backdrop-blur-none opacity-0 invisible"
          }
        `}
        onClick={onClose}
      />
      
      {/* Drawer Panel - WITHOUT built-in close button */}
      <div
        className={`
          fixed z-50
          ${positionClasses[position].container}
          w-72 sm:w-80 md:w-96
          bg-background shadow-2xl
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? positionClasses[position].transformOpen 
            : positionClasses[position].transform
          }
        `}
      >
        {/* No close button here - removed */}
        <div className="overflow-y-auto h-full">
          {children}
        </div>
      </div>
    </>
  );
};