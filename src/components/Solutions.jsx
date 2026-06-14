import { useState } from "react";
import VolumetricSolution from "./VolumetricSolution";
import StandardSolutions from "./StandardSolutions";
import Indicators from "./Indicators";

export default function Solutions() {
  const [category, setCategory] = useState("");

  if (category === "volumetric") {
    return <VolumetricSolution />;
  }

  if (category === "standard") {
    return <StandardSolutions />;
  }

  if (category === "indicator") {
    return <Indicators />;
  }

  return (
    <div className="container">
      <h2 className="title">Solutions</h2>

      <button onClick={() => setCategory("volumetric")}>
        Volumetric Solution
      </button>

      <button onClick={() => setCategory("standard")}>
        Standard Solution
      </button>

      <button onClick={() => setCategory("indicator")}>
        Indicator
      </button>

      <button onClick={() => setCategory("reagents")}>
        Reagents
      </button>

      <button onClick={() => setCategory("test")}>
        Test Solution
      </button>

      <button onClick={() => setCategory("buffer")}>
        Buffer Solution
      </button>
    </div>
  );
}
