import React from "react";
import "../App.css";
import coin from "../asserts/paymint.gif";
import { ConnectButton } from "web3uikit";

import Mint from "./Minter/Mint";
import Crossmint from "./Minter/Crossmint";

function Minter() {
  return (
    <div className="minter text-c enter text-light ">
      <div className="row text-center">
        <div className="col-sm mb-4">
          <img src={coin} alt="note" width="150px" />
        </div>
      </div>
      <div className="col-md d-flex justify-content-center p-3 ">
        {/* Wallet Connecter or Minting Components!*/}
        <Mint />
        <Crossmint />
        {/* _______________________________________________*/}
      </div>
      <div className="row  text-center  shadow-lg p-3 mb-5 rounded">
        <div className="col-md">
          <b className="h5">Grant Access</b>
          <ConnectButton
            id="connectBtn"
            moralisAuth={false}
            className="d-flex justify-content-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Minter;
