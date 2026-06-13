import { useState } from "react";
import { volumetricSolutions } from "../data/volumetric";

export default function VolumetricSolution() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = volumetricSolutions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "red", textAlign: "center" }}>
        Volumetric Solutions
      </h2>

      <input
        type="text"
        placeholder="Search Solution..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "2px solid black",
          marginBottom: "15px"
        }}
      />

      {filtered.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(item)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            marginBottom: "8px",
            cursor: "pointer"
          }}
        >
          {item.name}
        </div>
      ))}

      {selected && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "2px solid black",
            borderRadius: "10px"
          }}
        >
          <h3>{selected.name}</h3>
          <p>{selected.preparation}</p>
        </div>
      )}
    </div>
  );
}
