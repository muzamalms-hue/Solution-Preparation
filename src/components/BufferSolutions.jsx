import { useState } from "react";
import bufferSolutions from "../data/buffer-solutions";

export default function BufferSolutions() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = bufferSolutions.filter((item) =>
    (item.name || item.ph || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // DETAIL VIEW
  if (selected) {
    return (
      <div className="container">
        <button className="back-btn" onClick={() => setSelected(null)}>
          ← Back
        </button>

        <h2 className="title">
          {selected.name || `pH ${selected.ph}`}
        </h2>

        {selected.preparation && (
          <div className="result-card">
            <h3>Preparation</h3>
            <p>{selected.preparation}</p>
          </div>
        )}

        {selected.ph && (
          <div className="result-card">
            <h3>pH</h3>
            <p>{selected.ph}</p>
          </div>
        )}

        {selected.naoh_ml && (
          <div className="result-card">
            <h3>NaOH Volume</h3>
            <p>{selected.naoh_ml} mL</p>
          </div>
        )}
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="container">
      <h2 className="title">Buffer Solutions</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search buffer solution..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <div className="dropdown">
          {filtered.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => setSelected(item)}
            >
              {item.name || `pH ${item.ph}`}
            </div>
          ))}
        </div>
      )}

      {!search && (
        <div className="solutions-grid">
          {bufferSolutions.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="solution-card"
              onClick={() => setSelected(item)}
            >
              <h3>{item.name || `pH ${item.ph}`}</h3>

              <p>
                <strong>Preparation:</strong>{" "}
                {item.preparation?.slice(0, 60) || "Click to view details"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
