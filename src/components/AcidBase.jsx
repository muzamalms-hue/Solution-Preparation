import { useState } from "react";
import chemicals from "../data/chemicals";

export default function AcidBase() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [selected, setSelected] = useState(null);

  // AUTO FILLED
  const [density, setDensity] = useState("");
  const [mw, setMw] = useState("");
  const [weightPercent, setWeightPercent] =
    useState("");

  // USER INPUTS
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [unit, setUnit] = useState("M");

  // RESULT
  const [result, setResult] = useState("");

  // FILTER
  const filtered = chemicals.filter((c) =>
    c.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // SELECT CHEMICAL
  const selectChemical = (chem) => {
    setSelected(chem);

    // AUTO FILL
    setDensity(chem.density);
    setMw(chem.mw);

    // IMPORTANT FIX
    setWeightPercent(chem.percentage);

    setShowDropdown(false);
    setSearch("");
  };

  // CALCULATE
  const calculate = () => {
    if (
      !selected ||
      !density ||
      !mw ||
      !weightPercent ||
      !volume ||
      !conc
    ) {
      alert("Fill all fields");
      return;
    }

    // NORMALITY
    let factor = selected.nFactor || 1;

    let finalConc =
      unit === "N"
        ? parseFloat(conc) / factor
        : parseFloat(conc);

    // FORMULA
    let requiredVolume =
      (finalConc *
        parseFloat(mw) *
        parseFloat(volume)) /
      (parseFloat(weightPercent) *
        parseFloat(density) *
        10);

    setResult(
      requiredVolume.toFixed(2) + " mL"
    );
  };

  return (
    <div className="container">
      {/* TITLE */}
      <h2 className="title">
        Acid & Base Molarity
      </h2>

      {/* DROPDOWN */}
      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() =>
            setShowDropdown(!showDropdown)
          }
        >
          {selected
            ? selected.name
            : "Select acid or base"}{" "}
          ▼
        </div>

        {showDropdown && (
          <div className="dropdown-box">
            {/* SEARCH */}
            <input
              className="search-input"
              type="text"
              placeholder="Search acid or base..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {/* LIST */}
            {filtered.map((chem, i) => (
              <div
                key={i}
                className="dropdown-item"
                onClick={() =>
                  selectChemical(chem)
                }
              >
                {chem.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SHOW FORM */}
      {selected && (
        <>
          {/* DENSITY */}
          <div className="row">
            <label>Density</label>

            <input
              type="text"
              value={density}
              readOnly
            />

            <span>g/mL</span>
          </div>

          {/* MW */}
          <div className="row">
            <label>
              Formula Weight
            </label>

            <input
              type="text"
              value={mw}
              readOnly
            />

            <span>g/mol</span>
          </div>

          {/* WEIGHT */}
          <div className="row">
            <label>Weight %</label>

            <input
              type="text"
              value={weightPercent}
              readOnly
            />

            <span>%</span>
          </div>

          {/* VOLUME */}
          <div className="row">
            <label>
              Desired Final Volume
            </label>

            <input
              type="number"
              placeholder="0"
              value={volume}
              onChange={(e) =>
                setVolume(e.target.value)
              }
            />

            <span>mL</span>
          </div>

          {/* CONCENTRATION */}
          <div className="row">
            <label>
              Desired Concentration
            </label>

            <input
              type="number"
              placeholder="0"
              value={conc}
              onChange={(e) =>
                setConc(e.target.value)
              }
            />

            <select
              className="unit"
              value={unit}
              onChange={(e) =>
                setUnit(e.target.value)
              }
            >
              <option value="M">
                Molar (M)
              </option>

              <option value="N">
                Normal (N)
              </option>
            </select>
          </div>

          {/* BUTTON */}
          <button onClick={calculate}>
            Calculate
          </button>

          {/* RESULT */}
          {result && (
            <div className="result">
              Required Volume:
              <br />
              {result}
            </div>
          )}
        </>
      )}
    </div>
  );
            }
