"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // <-- Import useRouter

type Stock = {
  symbol: string;
  name: string;
};

export default function Search() {
  const router = useRouter(); // <-- Initialize router
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (searchInput.length < 1) {
      setSearchResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/search?query=${searchInput}`
        );
        const data = await res.json();
        setSearchResults(data);
      } catch {
        setSearchResults([]);
      }
      setLoading(false);
    }, 500);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [searchInput]);

  const handleSelect = (symbol: string) => {
    setShowSearch(false);
    setSearchInput("");
    setSearchResults([]);
    // Navigate to the dynamic company page
    router.push(
      `/dashboard/public-market/${symbol.toUpperCase()}/companyProfile`
    );
  };

  return (
    <div className="relative">
      <div
        className="flex my-3 w-40 h-10 px-3 py-2 rounded-3xl text-sm space-x-1 gap-1 items-center cursor-pointer transition-colors"
        style={{ backgroundColor: "#242E2C" }}
        onClick={() => setShowSearch((v) => !v)}
      >
        <Image src="/Search.svg" alt="Search" width={24} height={24} />
        <span style={{ color: "#BBF49C" }}>Search</span>
      </div>
      {showSearch && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 bg-opacity-30"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white border border-gray-300 rounded shadow-lg w-100 p-3 text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              className="border border-gray-300 px-2 py-1 rounded w-full mb-2"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search stock symbol..."
              autoFocus
            />
            {loading && <div className="text-xs text-gray-400">Loading...</div>}
            <div className="max-h-48 overflow-y-auto">
              {searchResults.map((stock) => (
                <div
                  key={stock.symbol}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleSelect(stock.symbol)}
                >
                  <span className="font-semibold">{stock.symbol}</span> -{" "}
                  {stock.name}
                </div>
              ))}
              {!loading && searchInput && searchResults.length === 0 && (
                <div className="text-xs text-gray-400 px-3 py-2">
                  No results found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
