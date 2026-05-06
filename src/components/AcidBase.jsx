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
    if (unit === "N
