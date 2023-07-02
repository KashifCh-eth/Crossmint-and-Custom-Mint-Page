import "./App.css";
import "./asserts/fonts/Gentax.ttf";
import { MoralisProvider } from "react-moralis";
import Coinout from "./components/Coinout";
import Header from "./components/Header";
import Last from "./components/Footer";
import Minter from "./components/WalletConnect";
import Notein from "./components/Notein";
import PayMint from "./components/PayMint";
import { NotificationProvider } from "web3uikit";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <div className="App text-light p-4">
          <Header />
          <Minter />
          <Coinout />
          <Header />
          <Notein />
          <PayMint />
          <Last />
        </div>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default App;
