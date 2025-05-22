"use client";
import React, { useState, useRef, useEffect } from "react";
import TracksModal from "./tracksmodal";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTracksModal, setShowTracksModal] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close side popup on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-4 h-4 rounded-full">
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer bg-green-500 text-white p-4 mt-3 rounded-full shadow-md hover:bg-green-600"
      ></div>

      {/* Side Popup */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute mr-48 mt-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64 z-40"
        >
          <h2 className="text-lg font-semibold text-black mb-2">My Account</h2>
          <ul className="text-black space-y-2 text-sm font-light">
            <li className="hover:underline cursor-pointer">Subscriptions</li>
            <hr />
            <li
              className="hover:underline cursor-pointer"
              onClick={() => {
                setShowTracksModal(true);
                setIsOpen(false);
              }}
            >
              Tracks
            </li>
            <hr />
            <li className="hover:underline cursor-pointer">Logout</li>
          </ul>
        </div>
      )}

      {/* Fullscreen Modal */}
      {showTracksModal && (
        <TracksModal onClose={() => setShowTracksModal(false)} />
      )}
    </div>
  );
}
