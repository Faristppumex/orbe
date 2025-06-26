// components/CompetitorsList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIbmData } from "@/app/store/slices/keyCompetitors";

const CompetitorsList = () => {
  const dispatch = useDispatch();
  const { keyCompetitors, loading, error } = useSelector((state) => state.ibm);

  useEffect(() => {
    dispatch(fetchIbmData());
  }, [dispatch]);

  if (loading) return <p>Loading competitors...</p>;
  if (error) return <p>Error: {error}</p>;

  const competitors = [];

  // Parse flat array into structured keyCompetitor list
  for (let i = 0; i < keyCompetitors.length; i += 2) {
    const name = keyCompetitors[i];
    const symbol = keyCompetitors[i + 1];
    if (name && symbol) {
      competitors.push({ name, symbol });
    }
  }

  return (
    <div>
      <h2>Key Competitors</h2>
      <ul>
        {competitors.map((comp, index) => (
          <li key={index}>
            <strong>{comp.name}</strong> ({comp.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitorsList;
