import React from "react";
import "./Navigation.css";
import sarallogo from "../images/SaralBankLogo.jpg";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="navid">
        <img
                style={{
                height: "4rem",
                width: "18rem",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "30px",
              }} src={sarallogo}/>
       
        </div>
      </nav>
    </>
  );
}

export default Navigation;
