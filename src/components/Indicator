import { useState } from "react";
import indicators from "../data/indicators";

export default function Indicators() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = indicators.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // DETAIL PAGE
  if (selected) {
    return (
      <div className="container">
        <button
          onClick={() => setSelected(null)}
          className="back-btn"
        >
          ← Back
        </button>

        <h2 className="title">{selected.name}</h2>

        {selected.preparation && (
          <div className="result-card">
            <h3>Preparation</h3>
            <p>{selected.preparation}</p>
          </div>
        )}
      </div>
    );
  }

  // LIST PAGE
  return (
    <div className="container">
      <h2 className="title">Indicators</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search Indicator..."
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
