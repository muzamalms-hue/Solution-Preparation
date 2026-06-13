import { useState } from "react";

export default function Solutions() {
  const [category, setCategory] =
    useState("");

  return (
    <div className="container">
      <h2 className="title">
        Solutions
      </h2>

      {/* MENU */}

      <button
        onClick={() =>
          setCategory("volumetric")
        }
      >
        Volumetric Solution
      </button>

      <button
        onClick={() =>
          setCategory("standard")
        }
      >
        Standard Solution
      </button>

      <button
        onClick={() =>
          setCategory("indicator")
        }
      >
        Indicator
      </button>

      <button
        onClick={() =>
          setCategory("reagents")
        }
      >
        Reagents
      </button>

      <button
        onClick={() =>
          setCategory("test")
        }
      >
        Test Solution
      </button>

      <button
        onClick={() =>
          setCategory("buffer")
        }
      >
        Buffer Solution
      </button>

      {/* CONTENT */}

      {category ===
        "volumetric" && (
        <div className="result">
          Volumetric Solution List
        </div>
      )}

      {category ===
        "standard" && (
        <div className="result">
          Standard Solution List
        </div>
      )}

      {category ===
        "indicator" && (
        <div className="result">
          Indicator List
        </div>
      )}

      {category ===
        "reagents" && (
        <div className="result">
          Reagents List
        </div>
      )}

      {category === "test" && (
        <div className="result">
          Test Solution List
        </div>
      )}

      {category ===
        "buffer" && (
        <div className="result">
          Buffer Solution List
        </div>
      )}
    </div>
  );
          }
