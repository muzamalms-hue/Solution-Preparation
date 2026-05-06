import { useState } from "react";
import chemicals from "../data/chemicals";

export default function AcidBase() {
  const [selected, setSelected] = useState(null);
  const [density, setDensity] = useState("");
  const [fw, setFw] = useState("");
  const [percentage, setPercentage] = useState("");
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [unit, setUnit] = useState("Molar");
  const [result, setResult] = useState(null);

  const handleSelect = (e) => {
    const chem = chemicals.find(c => c.name === e.target.value);
    setSelected(chem);
    setDensity(chem.density);
    setFw(chem.fw);
    setPercentage(chem.percentage);
  };

  const handleCalculate = () => {
    if (!density || !fw || !percentage || !volume || !conc) {
      alert("Fill all fields");
      return;
    }

    const d = parseFloat(density);
    const f = parseFloat(fw);
    const p = parseFloat(percentage);
    const v = parseFloat(volume);
    const c = parseFloat(conc);

    const stockM = (d * p * 10) / f;
    const requiredVol = (c * v) / stockM;

    setResult(requiredVol.toFixed(2));
  };

  return (
    <div className="container">
      <h2>Acid & Base Molarity</h2>

      <select onChange={handleSelect}>
        <option>Select acid or base</option>
        {chemicals.map((c, i) => (
          <option key={i}>{c.name}</option>
        ))}
      </select>

      <input value={density} placeholder="Density" readOnly />
      <input value={fw} placeholder="Formula Weight" readOnly />
      <input value={percentage} placeholder="Weight %" readOnly />

      <input
        placeholder="Final Volume (mL)"
        onChange={(e) => setVolume(e.target.value)}
      />

      <input
        placeholder="Concentration"
        onChange={(e) => setConc(e.target.value)}
      />

      <select onChange={(e) => setUnit(e.target.value)}>
        <option>Molar</option>
        <option>Normal</option>
      </select>

      <button onClick={handleCalculate}>Calculate</button>

      {result && (
        <div className="result">
          Required Volume: {result} mL
        </div>
      )}
    </div>
  );
        }
