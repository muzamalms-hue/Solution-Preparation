import { useState } from "react";

import AcidBase from "./components/AcidBase";
import Molarity from "./components/Molarity";
import StockDilution from "./components/StockDilution";

import BottomNav from "./components/BottomNav";

function App() {
  // ACTIVE PAGE
  const [page, setPage] =
    useState("acid");

  return (
    <div className="app">
      {/* ACID & BASE */}
      {page === "acid" && (
        <AcidBase />
      )}

      {/* MOLARITY */}
      {page === "molarity" && (
        <Molarity />
      )}

      {/* STOCK */}
      {page === "stock" && (
        <StockDilution />
      )}

      {/* BOTTOM NAV */}
      <BottomNav
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
