export default function BottomNav({
  page,
  setPage,
}) {
  return (
    <div className="bottom-nav">
      {/* ACID */}
      <button
        className={
          page === "acid"
            ? "nav-btn active"
            : "nav-btn"
        }
        onClick={() =>
          setPage("acid")
        }
      >
        Acid & Base
      </button>

      {/* MOLARITY */}
      <button
        className={
          page === "molarity"
            ? "nav-btn active"
            : "nav-btn"
        }
        onClick={() =>
          setPage("molarity")
        }
      >
        Molarity
      </button>

      {/* STOCK */}
      <button
        className={
          page === "stock"
            ? "nav-btn active"
            : "nav-btn"
        }
        onClick={() =>
          setPage("stock")
        }
      >
        Stock Dilution
      </button>
    </div>
  );
}
