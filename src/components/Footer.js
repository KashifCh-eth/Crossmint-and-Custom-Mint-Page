import React from "react";
import coin from "../asserts/coin.png";

function Last() {
  return (
    <div className="container Head   ">
      <div className="row mb-4">
        <div className="Head-col col-sm ">
          <p className="Head-text text-center shadow-lg p-3 mb-5 style">
            Crown Pay - Mint
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm text-center mb-4">
          <img src={coin} alt="note" width="250px" />
          <p className="h3 style">Coin Out</p>
        </div>
        <div className="col-sm border border-light p-4 position-relative">
          {/* <img
            src={coin}
            alt="note"
            width="50px"
            className="pos position-absolute"
          /> */}
          <div className="bg-light text-dark p-4">
            <p className="p-text h3 style">SBOA</p>
            <p className="h2 p-4">
              Withdrawal by Acquiring Crown Coin and Selling on our Multi-chain
              Exchange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Last;
