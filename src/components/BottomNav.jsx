export default function BottomNav({ setPage }) {
  return (
    <div className="bottom-nav">
      <button onClick={() => setPage("acid")}>Acid & Base</button>
      <button onClick={() => setPage("molarity")}>Molarity</button>
      <button onClick={() => setPage("stock")}>Stock</button>
    </div>
  );
}
