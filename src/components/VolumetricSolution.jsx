import { useState } from "react";
import volumetric from "../data/Volumetric";

export default function VolumetricSolution() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = volumetric.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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

        <div className="result-card">
          <h3>Preparation</h3>

          <p>
            {selected.preparation}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="title">
        Volumetric Solutions
      </h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search Solution..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="solution-list">
        {filtered
          .slice(0, 5)
          .map((item, index) => (
            <div
              key={index}
              className="solution-item"
              onClick={() =>
                setSelected(item)
              }
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}
