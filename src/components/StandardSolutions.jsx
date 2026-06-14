import { useState } from "react";
import standardSolutions from "../data/standard-solutions";

export default function StandardSolutions() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = standardSolutions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // DETAIL PAGE
  if (selected) {
    return (
      <div className="container">
        <button onClick={() => setSelected(null)} className="back-btn">
          ← Back
        </button>

        <h2 className="title">{selected.name}</h2>

        {selected.strength && (
          <div className="result-card">
            <h3>Strength</h3>
            <p>{selected.strength}</p>
          </div>
        )}

        {selected.formula && (
          <div className="result-card">
            <h3>Formula</h3>
            <p>{selected.formula}</p>
          </div>
        )}

        {selected.preparation && (
          <div className="result-card">
            <h3>Preparation</h3>
            <p>{selected.preparation}</p>
          </div>
        )}

        {/* ❌ standardization removed */}
      </div>
    );
  }

  // LIST PAGE
  return (
    <div className="container">
      <h2 className="title">Standard Solutions</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search Solution..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="solution-list">
        {filtered
          .slice(0, search ? filtered.length : 5)
          .map((item, index) => (
            <div
              key={index}
              className="solution-item"
              onClick={() => setSelected(item)}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
        }
