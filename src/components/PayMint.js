import React from "react";
import web from "../asserts/web.png";

function PayMint() {
  return (
    <div className="container  style">
      <div className="row">
        <div className="Head-col col-sm">
          <p className="Head-text shadow-lg text-center p-3 mb-5 style ">
            {" "}
            Crown Pay - Mint
          </p>
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-md text-center pb-4">
          <img src={web} alt="note" width="250px" />
          {/* <p
            className="h3 m-2"
            style={{
              fontFamily: "monospace",
              color: "white",
              textAlign: "center",
            }}
          >
            Hold fiat & Crypto
          </p> */}
        </div>
        <div className="col-md  text-dark text-center   ">
          <div className="row">
            <div className="col-md note">Hold fiat & Crypto</div>
            <div className="col-md note">0% internal transfer</div>
            <div className="col-md note">180 fiat Currencies</div>
            <div className="col-md note">Unlock Defi Protocols</div>
          </div>
          {/* <p className="h5 p-2 note ">Hold fiat & Crypto</p>
          <p className="h5 p-2 note">0% internal transfer</p>
          <p className="h5  p-2 note">180 fiat Currencies </p>
          <p className="h5 p-2 note">Unlock Defi Protocols</p> */}
        </div>
      </div>
    </div>
  );
}

export default PayMint;
