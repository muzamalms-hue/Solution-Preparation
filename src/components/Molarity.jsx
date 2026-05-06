import { useState } from "react";

export default function Molarity() {
  const [fw, setFw] = useState("");
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!fw || !volume || !conc) {
      alert("Fill all fields");
      return;
    }

    const f = parseFloat(fw);
    const v = parseFloat(volume);
    const c = parseFloat(conc);

    const grams = f * c * v;
    setResult(grams.toFixed(2));
  };

  return (
    <div className="container">
      <h2>General Molarity</h2>

      <input placeholder="Formula Weight" onChange={(e) => setFw(e.target.value)} />
      <input placeholder="Volume (L)" onChange={(e) => setVolume(e.target.value)} />
      <input placeholder="Concentration (M)" onChange={(e) => setConc(e.target.value)} />

      <button onClick={handleCalculate}>Calculate</button>

      {result && <div className="result">Required: {result} g</div>}
    </div>
  );
}
