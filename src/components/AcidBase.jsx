import { useState } from "react";
import chemicals from "../data/chemicals";

export default function AcidBase() {
  const [search, setSearch] = useState("");
  const [density, setDensity] = useState("");
  const [fw, setFw] = useState("");
  const [percent, setPercent] = useState("");
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [unit, setUnit] = useState("M");
  const [result, setResult] = useState("");

  const filtered = chemicals.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectChem = (name) => {
    const chem = chemicals.find(c => c.name === name);
    setSearch(name);
    setDensity(chem.density);
    setFw(chem.fw);
    setPercent(chem.percent);
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

    let molarity = (d * p * 10) / f;

    if (unit === "N") {
      // simple assumption
      c = c;
    }

    const reqVol = (c * v) / molarity;

    setResult(`Use ${reqVol.toFixed(2)} mL stock solution`);
  };

  return (
    <div className="container">

      <h2 className="title">Acid & Base Molarity</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Select acid or base"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="dropdown">
        {filtered.map((c, i) => (
          <div key={i} onClick={() => selectChem(c.name)}>
            {c.name}
          </div>
        ))}
      </div>

      {/* ROWS */}

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
        <label>Weight percentage:</label>
        <input value={percent} onChange={e => setPercent(e.target.value)} />
        <span>% w/w</span>
      </div>

      <div className="row">
        <label>Desired final volume:</label>
        <input value={volume} onChange={e => setVolume(e.target.value)} />
        <span>mL</span>
      </div>

      <div className="row">
        <label>Desired concentration:</label>
        <input value={conc} onChange={e => setConc(e.target.value)} />

        <select
          className="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="M">Molar</option>
          <option value="N">Normal</option>
        </select>
      </div>

      <button onClick={calculate}>Calculate</button>

      {result && <p className="result">{result}</p>}
    </div>
  );
}
