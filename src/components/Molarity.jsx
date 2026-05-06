import { useState } from "react";

export default function Molarity() {
  // INPUTS
  const [fw, setFw] = useState("");
  const [volume, setVolume] =
    useState("");

  const [volumeUnit, setVolumeUnit] =
    useState("L");

  const [conc, setConc] = useState("");

  const [concUnit, setConcUnit] =
    useState("M");

  // RESULT
  const [result, setResult] =
    useState("");

  // CALCULATE
  const handleCalculate = () => {
    if (!fw || !volume || !conc) {
      alert("Fill all fields");
      return;
    }

    let finalVolume =
      parseFloat(volume);

    // VOLUME CONVERSION
    if (volumeUnit === "mL") {
      finalVolume =
        finalVolume / 1000;
    }

    if (volumeUnit === "uL") {
      finalVolume =
        finalVolume / 1000000;
    }

    // CONCENTRATION CONVERSION
    let finalConc =
      parseFloat(conc);

    if (concUnit === "mM") {
      finalConc =
        finalConc / 1000;
    }

    if (concUnit === "uM") {
      finalConc =
        finalConc / 1000000;
    }

    if (concUnit === "nM") {
      finalConc =
        finalConc / 1000000000;
    }

    if (concUnit === "pM") {
      finalConc =
        finalConc /
        1000000000000;
    }

    if (concUnit === "fM") {
      finalConc =
        finalConc /
        1000000000000000;
    }

    // FORMULA
    const grams =
      parseFloat(fw) *
      finalConc *
      finalVolume;

    setResult(
      grams.toFixed(6) + " g"
    );
  };

  return (
    <div className="container">
      {/* TITLE */}
      <h2 className="title">
        General Molarity
      </h2>

      {/* FORMULA WEIGHT */}
      <div className="row">
        <label>
          Formula Weight
        </label>

        <input
          type="number"
          placeholder="0"
          value={fw}
          onChange={(e) =>
            setFw(e.target.value)
          }
        />

        <span>g/mol</span>
      </div>

      {/* FINAL VOLUME */}
      <div className="row">
        <label>
          Desired Final Volume
        </label>

        <input
          type="number"
          placeholder="0"
          value={volume}
          onChange={(e) =>
            setVolume(
              e.target.value
            )
          }
        />

        <select
          className="unit"
          value={volumeUnit}
          onChange={(e) =>
            setVolumeUnit(
              e.target.value
            )
          }
        >
          <option value="L">
            L
          </option>

          <option value="mL">
            mL
          </option>

          <option value="uL">
            uL
          </option>
        </select>
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
          value={concUnit}
          onChange={(e) =>
            setConcUnit(
              e.target.value
            )
          }
        >
          <option value="M">
            M
          </option>

          <option value="mM">
            mM
          </option>

          <option value="uM">
            uM
          </option>

          <option value="nM">
            nM
          </option>

          <option value="pM">
            pM
          </option>

          <option value="fM">
            fM
          </option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {/* RESULT */}
      {result && (
        <div className="result">
          Required Amount:
          <br />
          {result}
        </div>
      )}
    </div>
  );
}
