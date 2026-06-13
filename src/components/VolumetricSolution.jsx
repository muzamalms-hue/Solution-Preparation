import { useState } from "react";
import volumetric from "../data/Volumetric";

export default function VolumetricSolution() {
  const [search, setSearch] =
    useState("");

  const [selected, setSelected] =
    useState(null);

  const filtered =
    volumetric.filter((item) =>
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="container">
      <h2 className="title">
        Volumetric Solutions
      </h2>

      <input
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="dropdown">
        {filtered.map((item, i) => (
          <div
            key={i}
            onClick={() =>
              setSelected(item)
            }
          >
            {item.name}
          </div>
        ))}
      </div>

      {selected && (
        <div className="result">
          <h3>
            {selected.name}
          </h3>

          <p>
            {
              selected.preparation
            }
          </p>
        </div>
      )}
    </div>
  );
}
