import { useState } from "react";
import chemicals from "../data/chemicals";

export default function AcidBase() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const [density, setDensity] = useState("");
  const [fw, setFw] = useState("");
  const [percent, setPercent] = useState("");
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [unit, setUnit] = useState("M");

  const [result, setResult] = useState("");

  // 🔍 FILTER SEARCH
  const filteredChemicals = chemicals.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (name) => {
    const chem = chemicals.find(c => c.name === name);
    setSelected(name);
    setDensity(chem.density);
    setFw(chem.fw);
    setPercent(chem.percent);
    setSearch(name);
  };

  const calculate = () => {
    const d = parseFloat(density);
    const f = parseFloat(fw);
    const p = parseFloat(percent);
    const v = parseFloat(volume);
    let c = parseFloat(conc);

    if (!d || !f || !p || !v || !c) {
      setResult("Fill all fields");
      return;
    }

    // 🔬 STOCK MOLARITY
    let molarity = (d * p * 10) / f;

    // 🔁 NORMALITY conversion
    if (unit === "N") {
      // Assume monoprotic (can improve later)
      c = c; // 1N = 1M (for simple acids)
    }

    const requiredVolume = (c * v) / molarity;

    setResult(`Use ${requiredVolume.toFixed(2)} mL stock solution`);
  };

  return (
    <div className="container">
      <h2>Acid & Base Molarity</h2>

      {/* 🔍 SEARCH BOX */}
      <input
        type="text"
        placeholder="Search acid or base..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔽 FILTERED LIST */}
      <div className="dropdown">
        {filteredChemicals.map((c, i) => (
          <div
            key={i}
            className="dropdown-item"
            onClick={() => handleSelect(c.name)}
          >
            {c.name}
          </div>
        ))}
      </div>

      {/* INPUT ROWS */}

      <div className="row">
        <label>Density:</label>
        <input value={density} onChange={e => setDensity(e.target.value)} />
        <span>g/mL</span>
      </div>

      <div className="row">
        <label>Formula weight:</label>
        <input value={fw} onChange={e => setFw(e.target.value)} />
        <span>g/mol</span>
      </div>

      <div className="row">
        <label>Weight %:</label>
        <input value={percent} onChange={e => setPercent(e.target.value)} />
        <span>% w/w</span>
      </div>

      <div className="row">
        <label>Final volume:</label>
        <input value={volume} onChange={e => setVolume(e.target.value)} />
        <span>mL</span>
      </div>

      <div className="row">
        <label>Concentration:</label>
        <input value={conc} onChange={e => setConc(e.target.value)} />

        {/* ✅ UNIT DROPDOWN */}
        <select
          className="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="M">Molar (M)</option>
          <option value="N">Normal (N)</option>
        </select>
      </div>

      <button onClick={calculate}>Calculate</button>

      {result && <p className="result">{result}</p>}
    </div>
  );
      }
