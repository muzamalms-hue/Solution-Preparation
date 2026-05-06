import { useState } from "react";

export default function StockDilution() {
  // INPUTS
  const [c1, setC1] = useState("");
  const [c1Unit, setC1Unit] =
    useState("M");

  const [v2, setV2] = useState("");
  const [v2Unit, setV2Unit] =
    useState("L");

  const [c2, setC2] = useState("");
  const [c2Unit, setC2Unit] =
    useState("M");

  // RESULT
  const [result, setResult] =
    useState("");

  // CONCENTRATION CONVERTER
  const convertConc = (
    value,
    unit
  ) => {
    let val = parseFloat(value);

    if (unit === "mM")
      return val / 1000;

    if (unit === "uM")
      return val / 1000000;

    if (unit === "nM")
      return val / 1000000000;

    if (unit === "pM")
      return (
        val / 1000000000000
      );

    if (unit === "fM")
      return (
        val /
        1000000000000000
      );

    return val;
  };

  // VOLUME CONVERTER
  const convertVolume = (
    value,
    unit
  ) => {
    let val = parseFloat(value);

    if (unit === "mL")
      return val / 1000;

    if (unit === "uL")
      return val / 1000000;

    return val;
  };

  // CALCULATE
  const handleCalculate = () => {
    if (!c1 || !v2 || !c2) {
      alert("Fill all fields");
      return;
    }

    // CONVERT
    const stockConc =
      convertConc(c1, c1Unit);

    const finalVol =
      convertVolume(v2, v2Unit);

    const finalConc =
      convertConc(c2, c2Unit);

    // FORMULA
    const v1 =
      (finalConc * finalVol) /
      stockConc;

    // RESULT IN mL
    const resultmL =
      v1 * 1000;

    setResult(
      resultmL.toFixed(4) +
        " mL"
    );
  };

  return (
    <div className="container">
      {/* TITLE */}
      <h2 className="title">
        Stock Solution Dilution
      </h2>

      {/* STOCK CONC */}
      <div className="row">
        <label>
          Stock Concentration
        </label>

        <input
          type="number"
          placeholder="0"
          value={c1}
          onChange={(e) =>
            setC1(e.target.value)
          }
        />

        <select
          className="unit"
          value={c1Unit}
          onChange={(e) =>
            setC1Unit(
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

      {/* FINAL VOLUME */}
      <div className="row">
        <label>
          Desired Final Volume
        </label>

        <input
          type="number"
          placeholder="0"
          value={v2}
          onChange={(e) =>
            setV2(e.target.value)
          }
        />

        <select
          className="unit"
          value={v2Unit}
          onChange={(e) =>
            setV2Unit(
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

      {/* FINAL CONC */}
      <div className="row">
        <label>
          Desired Concentration
        </label>

        <input
          type="number"
          placeholder="0"
          value={c2}
          onChange={(e) =>
            setC2(e.target.value)
          }
        />

        <select
          className="unit"
          value={c2Unit}
          onChange={(e) =>
            setC2Unit(
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
          Required Stock Volume:
          <br />
          {result}
        </div>
      )}
    </div>
  );
      }
