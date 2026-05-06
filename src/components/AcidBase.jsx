import { useState } from "react";
import { chemicals } from "../data/chemicals";

export default function AcidBase() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = chemicals.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Acid & Base Molarity</h2>

      <input
        placeholder="Search chemical..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => {
        const chem = chemicals.find(c => c.name === e.target.value);
        setSelected(chem);
      }}>
        <option>Select acid or base</option>
        {filtered.map((c, i) => (
          <option key={i}>{c.name}</option>
        ))}
      </select>

      <input value={selected?.density || ""} placeholder="Density (g/mL)" readOnly />
      <input value={selected?.fw || ""} placeholder="Formula Weight" readOnly />
      <input value={selected?.wp || ""} placeholder="Weight %" readOnly />

      <input placeholder="Final Volume (mL)" />

      <select>
        <option>Molar</option>
        <option>Normal</option>
      </select>

      <button>Calculate</button>
    </div>
  );
}
