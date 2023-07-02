import React from "react";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function Crossmint() {
  return (
    <div>
      <div className="bg-transparent m-2">
        <CrossmintPayButton
          clientId="aa3573fb-2423-4590-9d29-0fba5e2694c5" // Update  Producation Id
          className="xmint-btn"
          mintConfig={{
            type: "erc-721",
            quantity: 1,
            totalPrice: "0.33", //price in bnb
            // your custom minting arguments...
          }}
          style={{
            fontSize: 10,
            padding: 10,
          }}
        />
        {/* <CrossmintPayButton
          clientId="aa3573fb-2423-4590-9d29-0fba5e2694c5"
          mintConfig='{"type":"erc-721","totalPrice":"0.33"}'
        /> */}
      </div>
    </div>
  );
}

export default Crossmint;
