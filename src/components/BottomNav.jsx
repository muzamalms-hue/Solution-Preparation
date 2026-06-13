export default function BottomNav({
  page,
  setPage,
}) {
  return (
    <div className="bottom-nav">

      {/* ROW 1 */}
      <div className="nav-row">
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

      {/* ROW 2 */}
      <div className="nav-row">
        <button
          className={
            page === "volumetric"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() =>
            setPage("volumetric")
          }
        >
          Volumetric
        </button>
      </div>

    </div>
  );
}
