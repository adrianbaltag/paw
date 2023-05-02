import React from "react";
//
import { ReactComponent as Logo } from "../assets/Logo.svg";

function Navbar() {
  return (
    <div className="h-auto flex flex-row justify-between w-full">
      {/* set dimension to div holding the svg */}
      <div className="logo " style={{ height: "40px", width: "40px" }}>
        {/* give 100% w / h for the svg to fill its parent */}
        <Logo style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="links gap-5 flex">
        <a>profile</a>
        <a>hangouts</a>
      </div>

      <div className="logoutBtn mr-3">
        <button className="outline outline-offset-2 rounded-full mt-2   outline-slate-700 px-4">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
