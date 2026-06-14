// components/StandardSolutions.jsx

import standardSolutions from "../data/standard-solutions";

export default function StandardSolutions() {
  return (
    <div className="solutions-container">
      {standardSolutions.map((item, index) => (
        <div key={index} className="solution-card">
          <h2>{item.name}</h2>

          <div className="solution-section">
            <strong>Strength:</strong>
            <p>{item.strength}</p>
          </div>

          <div className="solution-section">
            <strong>Formula:</strong>
            <p>{item.formula}</p>
          </div>

          <div className="solution-section">
            <strong>Preparation:</strong>
            <p>{item.preparation}</p>
          </div>

          <div className="solution-section">
            <strong>Standardization:</strong>
            <p>{item.standardization}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
