import React from "react";
import note from "../asserts/note.png";
import coin from "../asserts/coin.png";
import web from "../asserts/web.png";

function Coinout() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm text-center  mt-4">
          <img src={note} alt="note" width="200px" />
          <p className="mt-3 h3">Note in</p>
        </div>
        <div className="col-sm text-center mt-4">
          <img src={web} alt="note" width="200px" />
          <p className="mt-3  h3">Hold fiat & Crypto</p>
        </div>
        <div className="col-sm text-center mt-4">
          <img src={coin} alt="note" width="200px" />
          <p className="mt-3  h3">Coin Out</p>
        </div>
        <p className="h3 text-center mt-4">
          Withdraw Via Digital Currency Exchange{" "}
        </p>
      </div>
    </div>
  );
}

export default Coinout;
