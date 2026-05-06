import { useState } from "react";
import chemicals from "../data/chemicals";

export default function AcidBase() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const [weightPercent, setWeightPercent] = useState("");
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [unit, setUnit] = useState("M");

  const filtered = chemicals.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectChemical = (chem) => {
    setSelected(chem);
    setShowDropdown(false);
    setSearch("");
  };

  const calculate = () => {
    if (!selected || !weightPercent || !volume || !conc) {
      alert("Fill all fields");
      return;
    }

    let normalityFactor = selected.nFactor || 1;

    let finalConc =
      unit === "N" ? conc / normalityFactor : conc;

    let result =
      (finalConc * selected.mw * volume) /
      (weightPercent * selected.density * 10);

    alert("Required Volume: " + result.toFixed(2) + " mL");
  };

  return (
    <div className="container">
      <h2>Acid & Base Molarity</h2>

      {/* DROPDOWN */}
      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selected ? selected.name : "Select acid or base"}
        </div>

        {showDropdown && (
          <div className="dropdown-box">
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {filtered.map((chem, i) => (
              <div
                key={i}
                onClick={() => selectChemical(chem)}
              >
                {chem.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FIELDS */}
      {selected && (
        <>
          <div className="row">
            <label>Density:</label>
            <input value={selected.density} readOnly />
            <span>g/mL</span>
          </div>

          <div className="row">
            <label>Formula weight:</label>
            <input value={selected.mw} readOnly />
            <span>g/mol</span>
          </div>

          <div className="row">
            <label>Weight %:</label>
            <input
              value={weightPercent}
              onChange={(e) => setWeightPercent(e.target.value)}
            />
            <span>% w/w</span>
          </div>

          <div className="row">
            <label>Final volume:</label>
            <input
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <span>mL</span>
          </div>

          <div className="row">
            <label>Concentration:</label>
            <input
              value={conc}
              onChange={(e) => setConc(e.target.value)}
            />

            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="M">Molar (M)</option>
              <option value="N">Normal (N)</option>
            </select>
          </div>

          <button onClick={calculate}>Calculate</button>
        </>
      )}
    </div>
  );
}
