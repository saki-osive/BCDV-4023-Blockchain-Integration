// src/App.js
import React, { useState } from "react";
const ethers = require("ethers")

function App() {
  const [pair, setPair] = useState("");
  const [conversion, setConversion] = useState("");
  const [btcConversion, setBtcConversion] = useState("");
  const [contractAddress] = useState("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"); // Replace with your actual contract address
  const [provider] = useState(new ethers.providers.JsonRpcProvider("http://localhost:8545"));

  // const handleConvert = async () => {
  //   try {
  //     const contract = new ethers.Contract(contractAddress, ["function convert(string) view returns (uint256)"], provider);
  //     const result = await contract.convert('');
  //     setConversion(result.toString());
  //   } catch (error) {
  //     console.error("Error converting:", error.message);
  //   }
  // };

  const getFeeds = async () => {
      try {
          const contract = new ethers.Contract(contractAddress,
              ["function getChainlinkDataFeedLatestAnswer() public view returns (int)"], provider);
          const result = await contract.getChainlinkDataFeedLatestAnswer();
          setBtcConversion(result.toString);
          console.log("Feed data is: ", setBtcConversion(result.toString));
      }
      catch (error) {
          console.error("Couldn't convert", error.message);
      }
  }

  return (
      <div>
        <h1>Currency Converter dApp</h1>
        {/*<label>*/}
        {/*  Select Currency Pair:*/}
        {/*  <select value={pair} onChange={(e) => setPair(e.target.value)}>*/}
        {/*    <option value="USD_TO_ETH">USD to ETH</option>*/}
        {/*    <option value="ETH_TO_USD">ETH to USD</option>*/}
        {/*    <option value="EUR_TO_ETH">EUR to ETH</option>*/}
        {/*    <option value="ETH_TO_EUR">ETH to EUR</option>*/}
        {/*  </select>*/}
        {/*</label>*/}
        {/*<button onClick={handleConvert}>Submit</button>*/}
        {/*<div>*/}
        {/*  <label>Conversion Result:</label>*/}
        {/*  <input type="text" readOnly value={conversion} />*/}
        {/*</div>*/}
          <button onClick={getFeeds}>TestConversion</button>
          <div>
              <label>Conversion Result:</label>
              <input type="text" readOnly value={btcConversion} />
          </div>

      </div>
  );
}

export default App;
