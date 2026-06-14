import { useState } from "react";
import reagents from "../data/reagents";

export default function Reagents() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = reagents.filter((item) =>
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

        <h2 className="title">
          {selected.name}
        </h2>

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

        {selected.storage && (
          <div className="result-card">
            <h3>Storage</h3>
            <p>{selected.storage}</p>
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
      <h2 className="title">
        Reagents
      </h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search Reagent..."
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
