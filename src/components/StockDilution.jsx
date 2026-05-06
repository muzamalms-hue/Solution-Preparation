import { useState } from "react";

export default function StockDilution() {
  const [c1, setC1] = useState("");
  const [v2, setV2] = useState("");
  const [c2, setC2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!c1 || !v2 || !c2) {
      alert("Fill all fields");
      return;
    }

    const stock = parseFloat(c1);
    const finalVol = parseFloat(v2);
    const finalConc = parseFloat(c2);

    const v1 = (finalConc * finalVol) / stock;
    setResult(v1.toFixed(2));
  };

  return (
    <div className="container">
      <h2>Stock Solution Dilution</h2>

      <input placeholder="Stock Conc (M)" onChange={(e) => setC1(e.target.value)} />
      <input placeholder="Final Volume (L)" onChange={(e) => setV2(e.target.value)} />
      <input placeholder="Final Conc (M)" onChange={(e) => setC2(e.target.value)} />

      <button onClick={handleCalculate}>Calculate</button>

      {result && <div className="result">Required Stock: {result} L</div>}
    </div>
  );
      }
