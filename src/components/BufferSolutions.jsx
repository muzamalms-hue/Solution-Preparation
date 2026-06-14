import { useState } from "react";
import bufferSolutions from "../data/buffer-solutions";

export default function BufferSolutions() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = bufferSolutions.filter((item) =>
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

        {selected.composition && (
          <div className="result-card">
            <h3>Composition</h3>
            <p>{selected.composition}</p>
          </div>
        )}

        {selected.phRange && (
          <div className="result-card">
            <h3>pH Range</h3>
            <p>{selected.phRange}</p>
          </div>
        )}

        {selected.use && (
          <div className="result-card">
            <h3>Use</h3>
            <p>{selected.use}</p>
          </div>
        )}

        {selected.notes && (
          <div className="result-card">
            <h3>Notes</h3>
            <p>{selected.notes}</p>
          </div>
        )}
      </div>
    );
  }

  // LIST PAGE
  return (
    <div className="container">
      <h2 className="title">Buffer Solutions</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search Buffer Solution..."
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
