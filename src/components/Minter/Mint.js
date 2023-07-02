import React from "react";
import Web3 from "web3";
import { useNotification } from "web3uikit";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { ABI, ContractAddress } from "../../web3Inject/contract";

function Mint() {
  const [IsMinting, SetMinting] = useState(false);
  const [isChainPreasent, setChain] = useState(false);
  const [isSwitch, setSwitch] = useState(false);

  const chainIdType = Web3.utils.toHex(56);
  const dispatch = useNotification();

  const handleNewNotification = (DispatchType) => {
    if (DispatchType === "Success") {
      dispatch({
        type: DispatchType,
        message: "Minted! Check Your Opensea Account For CrownNFT!",
        title: "Successfully Minted!",
        position: "topR",
      });
    } else if (DispatchType === "error") {
      dispatch({
        type: DispatchType,
        message: "Sorry, something went wrong please try again later.",
        title: "transaction failed!",
        position: "topR",
      });
    }
  };
  const convert = require("ether-converter");
  const CostinWei = convert("0.33", "ether", "wei");

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    }
  }

  async function loadContract() {
    let abi = ABI; // your abi here
    let address = ContractAddress; // your contract address here
    return await new window.web3.eth.Contract(abi, address);
  }
  async function getCurrentAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  }

  async function run() {
    if (localStorage.getItem("provider")) {
      if (typeof window.ethereum == "undefined") {
        alert("please install MetaMask!! Or Use CrossPay Mint Method!");
      } else {
        if (chainIdType === window.ethereum.chainId) {
          Minting();
        } else {
          const currentChainId = await window.ethereum.chainId;
          const switchNetwork = async (chainId) => {
            if (currentChainId !== chainId) {
              try {
                setSwitch(true);
                await window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: Web3.utils.toHex(chainId) }],
                });
                console.log(`switched to chainid : ${chainId} succesfully`);
                setSwitch(false);
                Minting();
              } catch (err) {
                alert(
                  `error occured while switching chain to chainId ${chainId}, err: ${err.message} code: ${err.code}`
                );
                setSwitch(false);
                if (err.code === 4902) {
                  setChain(true);
                  addNetwork(BNBNetwork);
                } else {
                  setChain(false);
                  alert("`error occured while switching!");
                }
              }
            }
          };
          switchNetwork(chainIdType);
        }
      }
    } else {
      alert("Connect Wallet First!");
    }
  }

  const addNetwork = async (networkDetails) => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [networkDetails],
      });
      // alert("BNB Chain Added!");
      setChain(false);
      run();
    } catch (err) {
      alert(
        `error ocuured while adding new chain with chainId:${networkDetails.chainId}, err: ${err.message}`
      );
      setChain(false);
    }
  };

  const BNBNetwork = {
    chainId: Web3.utils.toHex(chainIdType),
    chainName: "BNB Smart Chain",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com/"],
  };

  async function Minting() {
    try {
      SetMinting(true);
      await loadWeb3();
      window.contract = await loadContract();
      const account = await getCurrentAccount();
      let result = await window.contract.methods.CustomMint(1).send({
        gasLimit: "350000",
        to: ContractAddress,
        from: account,
        value: CostinWei,
      });
      if (result) {
        alert("Minted! Check Your Opensea Account For CrownNFT!");
        handleNewNotification("Success");
        SetMinting(false);
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
      handleNewNotification("error");
      SetMinting(false);
    }
  }

  return (
    <div>
      <div>
        {/* <button className="btn btn-success px-5 pe-5 m-2" onClick={MintCrown}>
            Mint
          </button> */}
        {IsMinting ? (
          <Button className="btn btn-success px-5 pe-5 m-2" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Minting...
          </Button>
        ) : (
          <div>
            {/* {isChainPreasent ? (
              <div>
                <Button className="btn btn-success px-5 pe-5 m-2" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  ADDING BNB CHAIN...
                </Button>
              </div>
            ) : (
              <button className="btn btn-success px-5 pe-5 m-2" onClick={run}>
                Mint
              </button>
            )} */}
            {isSwitch ? (
              <div>
                <Button className="btn btn-success px-5 pe-5 m-2" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Switching To BNB ...
                </Button>
              </div>
            ) : (
              <div>
                {isChainPreasent ? (
                  <div>
                    <Button className="btn btn-success px-5 pe-5 m-2" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      ADDING BNB CHAIN...
                    </Button>
                  </div>
                ) : (
                  <button
                    className="btn btn-success px-5 pe-5 m-2"
                    onClick={run}
                  >
                    Mint
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mint;
