import hrc_logo from "../../logo.svg";
import ABC_logo from "../../assets/ABCLogoFull.svg";
import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="container__header">
    <div className="ABC__logo">
    <img src={ABC_logo} alt='ABC logo' />
    </div>
    <div className="hrc__logo">
    <img src={hrc_logo} alt='hrc logo' />
    </div>
    <div id="invoice_list"><h2>Invoice List</h2></div>
    </header>
  );
}

export default Header;
