import { useState } from "react";

export default function StockDilution() {
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [v2, setV2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const v1 = (c2 * v2) / c1;
    setResult(v1.toFixed(3));
  };

  return (
    <div className="container">
      <h2>Stock Solution Dilution</h2>

      <input placeholder="Stock Conc" onChange={e => setC1(e.target.value)} />

      <select>
        <option>M</option>
        <option>mM</option>
        <option>µM</option>
        <option>nM</option>
      </select>

      <input placeholder="Final Volume" onChange={e => setV2(e.target.value)} />

      <select>
        <option>L</option>
        <option>mL</option>
        <option>µL</option>
      </select>

      <input placeholder="Desired Conc" onChange={e => setC2(e.target.value)} />

      <button onClick={calculate}>Calculate</button>

      {result && <p>Required Stock Volume: {result}</p>}
    </div>
  );
}
