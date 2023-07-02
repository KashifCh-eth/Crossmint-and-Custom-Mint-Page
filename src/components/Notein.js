import React from "react";
import note from "../asserts/note.png";
import arrow from "../asserts/arrow.png";

function Notein() {
  return (
    <div className="container mb-4 p-4">
      <div className="row ">
        <div className="col-3 text-center ">
          <img src={note} alt="note" width="200px" />
          <p className="h3">Note in</p>
          <img src={arrow} alt="note" width="100px" />
        </div>
        <div className="col-md text-dark">
          <div className="row text-center">
            <div className="col-md note ">
              Deposit Via Minting A Digital Bank Draft
            </div>
            <div className="col-md note ">
              Secure your interest with digital certificate as your receipt
            </div>
            <div className="col-md note ">
              Enjoy Automated Accounting & Stake to Earn Capabilities
            </div>
            <div className="col-md note  ">
              Enjoy Automated Accounting & Stake to Earn Capabilities
            </div>
          </div>
          {/* <p className="h4 p-4 note m-3 ">
            Deposit Via Minting A Digital Bank Draft
          </p>
          <p className="h4 p-4 note m-3">
            Secure your interest with digital certificate as your receipt
          </p>
          <p className="h4 p-4  note m-3">
            Enjoy Automated Accounting & Stake to Earn Capabilities
          </p>
          <p className="h4 p-4   note m-3">
            Stake Your Digital Bank Draft Certificate and enjoy extensions of
            credit lines
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Notein;
