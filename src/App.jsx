import { useState } from "react";
import AcidBase from "./components/AcidBase";
import Molarity from "./components/Molarity";
import StockDilution from "./components/StockDilution";
import BottomNav from "./components/BottomNav";
import "./style.css";

export default function App() {
  const [page, setPage] = useState("acid");

  return (
    <>
      {page === "acid" && <AcidBase />}
      {page === "molarity" && <Molarity />}
      {page === "stock" && <StockDilution />}

      <BottomNav setPage={setPage} />
    </>
  );
}
