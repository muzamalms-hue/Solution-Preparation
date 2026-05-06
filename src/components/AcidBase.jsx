import { useState } from "react";
import chemicals from "../data/chemicals";

export default function AcidBase() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  // AUTO FILLED VALUES
  const [density, setDensity] = useState("");
  const [mw, setMw] = useState("");
  const [weightPercent, setWeightPercent] = useState("");

  // USER INPUTS
  const [volume, setVolume] = useState("");
  const [conc, setConc] = useState("");
  const [unit, setUnit] = useState("M");

  const filtered = chemicals.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // SELECT CHEMICAL
  const selectChemical = (chem) => {
    setSelected(chem);

    // AUTO FILL
    setDensity(chem.density);
    setMw(chem.mw);
    setWeightPercent(chem.weight);

    setShowDropdown(false);
    setSearch("");
  };

  // CALCULATION
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

    let normalityFactor = selected.nFactor || 1;

    let finalConc =
      unit === "N"
        ? parseFloat(conc) / normalityFactor
        : parseFloat(conc);

    let result =
      (finalConc *
        parseFloat(mw) *
        parseFloat(volume)) /
      (parseFloat(weightPercent) *
        parseFloat(density) *
        10);

    alert(
      "Required Volume: " +
        result.toFixed(2) +
        " mL"
    );
  };

  return (
    <div className="container">
      <h2 className="title">Acid & Base Molarity</h2>

      {/* SELECT BOX */}
      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() =>
            setShowDropdown(!showDropdown)
          }
        >
          {selected
            ? selected.name
            : "Select acid or base"}
        </div>

        {showDropdown && (
          <div className="dropdown-box">
            {/* SEARCH */}
            <input
              className="search-input"
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

      {/* FIELDS */}
      {selected && (
        <>
          {/* DENSITY */}
          <div className="row">
            <label>Density:</label>

            <input
              value={density}
              onChange={(e) =>
                setDensity(e.target.value)
              }
            />

            <span>g/mL</span>
          </div>

          {/* MW */}
          <div className="row">
            <label>Formula weight:</label>

            <input
              value={mw}
              onChange={(e) =>
                setMw(e.target.value)
              }
            />

            <span>g/mol</span>
          </div>

          {/* WEIGHT */}
          <div className="row">
            <label>Weight %:</label>

            <input
              value={weightPercent}
              onChange={(e) =>
                setWeightPercent(
                  e.target.value
                )
              }
            />

            <span>% w/w</span>
          </div>

          {/* VOLUME */}
          <div className="row">
            <label>Final volume:</label>

            <input
              value={volume}
              onChange={(e) =>
                setVolume(e.target.value)
              }
            />

            <span>mL</span>
          </div>

          {/* CONCENTRATION */}
          <div className="row">
            <label>Concentration:</label>

            <input
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
        </>
      )}
    </div>
  );
                           }
