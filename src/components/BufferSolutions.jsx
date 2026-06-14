import { useState } from "react";
import bufferSolutions from "../data/buffer-solutions";

export default function BufferSolutions() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = bufferSolutions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // DETAIL VIEW
  if (selected) {
    return (
      <div className="container">
        <button className="back-btn" onClick={() => setSelected(null)}>
          ← Back
        </button>

        <h2 className="title">{selected.name}</h2>

        <div className="result-card">
          <h3>Composition</h3>
          <p>{selected.composition}</p>
        </div>

        <div className="result-card">
          <h3>pH Range</h3>
          <p>{selected.phRange}</p>
        </div>

        {selected.use && (
          <div className="result-card">
            <h3>Use</h3>
            <p>{selected.use}</p>
          </div>
        )}

        <div className="result-card">
          <h3>Preparation</h3>
          <p>{selected.preparation || "No preparation data available"}</p>
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="container">
      <h2 className="title">Buffer Solutions</h2>

      {/* SEARCH BAR */}
      <input
        className="search-input"
        type="text"
        placeholder="Search buffer solution..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* DROPDOWN LIST */}
      {search && (
        <div className="dropdown">
          {filtered.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => setSelected(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* DEFAULT GRID (optional fallback) */}
      {!search && (
        <div className="solutions-grid">
          {bufferSolutions.slice(0, 6).map((item, index) => (
            <div
              className="solution-card"
              key={index}
              onClick={() => setSelected(item)}
            >
              <h3 className="solution-name">{item.name}</h3>

              <div className="solution-details">
                <p>
                  <strong>Composition:</strong> {item.composition}
                </p>
                <p>
                  <strong>pH Range:</strong> {item.phRange}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
            }
