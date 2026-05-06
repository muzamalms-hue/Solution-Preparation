import { useState } from "react";

export default function BottomNav({ setPage }) {
  const [active, setActive] = useState("acid");

  const handleClick = (page) => {
    setActive(page);
    setPage(page);
  };

  return (
    <div className="bottom-nav">
      <button
        className={active === "acid" ? "active" : ""}
        onClick={() => handleClick("acid")}
      >
        Acid & Base
      </button>

      <button
        className={active === "molarity" ? "active" : ""}
        onClick={() => handleClick("molarity")}
      >
        Molarity
      </button>

      <button
        className={active === "stock" ? "active" : ""}
        onClick={() => handleClick("stock")}
      >
        Stock
      </button>
    </div>
  );
}
