import standardSolutions from "../data/standard-solutions";

export default function StandardSolutions() {
  return (
    <div>
      <h1>Standard Solutions</h1>

      {standardSolutions.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}
