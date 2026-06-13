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

Ye is ka code hai ab 4th button nechy add krna hai ye already 3 thk hain 1 row me.
Ab 2nd row me new button add kr do
