// src/App.js
import React, { useState } from "react";
import { ethers } from "ethers";

function App() {
    const [pair, setPair] = useState("");
    const [conversion, setConversion] = useState("");
    const [contractAddress] = useState("0x5fbdb2315678afecb367f032d93f642f64180aa3"); // Replace with your actual contract address
    const [provider] = useState(new ethers.providers.JsonRpcProvider("http://localhost:8545"));

    const handleConvert = async () => {
        try {
            const contract = new ethers.Contract(contractAddress, ["function convert(string) view returns (uint256)"], provider);
            const result = await contract.convert(pair);
            setConversion(result.toString());
        } catch (error) {
            console.error("Error converting:", error.message);
        }
    };

    return (
        <div>
            <h1>Currency Converter dApp</h1>
            <label>
                Select Currency Pair:
                <select value={pair} onChange={(e) => setPair(e.target.value)}>
                    <option value="USD_TO_ETH">USD to ETH</option>
                    <option value="ETH_TO_USD">ETH to USD</option>
                    <option value="EUR_TO_ETH">EUR to ETH</option>
                    <option value="ETH_TO_EUR">ETH to EUR</option>
                </select>
            </label>
            <button onClick={handleConvert}>Submit</button>
            <div>
                <label>Conversion Result:</label>
                <input type="text" readOnly value={conversion} />
            </div>
        </div>
    );
}

export default App;
