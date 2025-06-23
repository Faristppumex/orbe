// import React from "react";
"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useAppDispatch } from "@/app/store/store";
import { fetchEarningCallTranscript } from "@/app/store/slices/SummarySlice";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Summary() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { transcripts = [] } =
    useSelector((state: RootState) => state.summary) || {};
  const symbol = params.company as string;

  const [year, setYear] = useState(2025);
  const [quarter, setQuarter] = useState(1);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const keywords = getTopWords(transcripts[0] || "", 5).map(
    ([word, count]) => ({
      [word]: count,
    })
  );

  useEffect(() => {
    dispatch(fetchEarningCallTranscript({ symbol, year, quarter }));
  }, [dispatch, symbol, year, quarter]);

  // Highlight selected word in the transcript
  function highlightWord(text: string, word: string | null) {
    if (!word) return text;
    // Use regex to match the word, case-insensitive, word boundaries
    const regex = new RegExp(`\\b(${word})\\b`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-300 font-bold rounded px-1">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div className="h-full w-full p-3 bg-[#ECF4E9]">
      <div className="flex h-full min-h-500 w-full rounded-2xl p-3  bg-[#ffff] text-black">
        <div>
          <div className=" min-w-60 p-3 border-2 max-h-60 mt-20 rounded border-gray-300">
            Filter
            <label className="block mb-1">Year</label>
            <select
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              <option value={2025}>2025</option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
            </select>
            <label className="block mb-1">Quarter</label>
            <select
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
              value={quarter}
              onChange={(e) => setQuarter(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="mt-5 border-2 border-gray-300 h-50 font-black rounded-xl p-2">
            Keywords
            <ul>
              {keywords.map((keyword, index) => {
                const [key, value] = Object.entries(keyword)[0];
                return (
                  <li
                    key={index}
                    className={`text-gray-700 mb-2 flex justify-between font-normal cursor-pointer ${
                      selectedWord === key ? "bg-yellow-200 font-bold" : ""
                    }`}
                    onClick={() => setSelectedWord(key)}
                  >
                    <span>{key}:</span>
                    <span className="ml-auto bg-amber-400 w-4 flex justify-center">
                      {value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold mb-4">Sentiment Analysis</h1>
          <h2 className="text-xl font-semibold mb-4">
            Q{quarter} {year} Earnings Call
          </h2>
          <p>Date: </p>
          <h1 className="text-2xl font-bold mb-4">
            Management Discussion section{" "}
          </h1>
          <div className="text-gray-700 mb-4">
            {highlightWord(transcripts[0] || "", selectedWord)}
          </div>
        </div>
      </div>
    </div>
  );
}

function getTopWords(text: string, count: number = 5): [string, number][] {
  const stopWords = new Set([
    "is",
    "the",
    "and",
    "he",
    "she",
    "it",
    "a",
    "an",
    "of",
    "to",
    "in",
    "on",
    "for",
    "with",
    "as",
    "by",
    "at",
    "from",
    "that",
    "this",
    "was",
    "were",
    "be",
    "are",
    "or",
    "but",
    "not",
    "so",
    "if",
    "then",
    "than",
    "has",
    "have",
    "had",
    "will",
    "would",
    "can",
    "could",
    "should",
    "do",
    "does",
    "did",
    "you",
    "i",
    "we",
    "they",
    "them",
    "his",
    "her",
    "their",
    "our",
    "my",
    "your",
    "me",
    "us",
  ]);
  const words = text
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word && !stopWords.has(word));

  const freq: Record<string, number> = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
}
