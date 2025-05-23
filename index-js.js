// Import necessary functions from viem via CDN
import { createWalletClient, custom } from "https://esm.sh/viem";

const connectButton = document.getElementById("connect-wallet");

// Declare walletClient variable outside the function
// so it can be potentially accessed elsewhere if needed
let walletClient;

 async function connect() {
  // Check if window.ethereum is present
  if (typeof window.ethereum !== "undefined") {
    // Wallet is likely installed
    // We'll add connection logic here later
    
    walletClient = createWalletClient({
      transport: custom(window.ethereum),
    })
    await walletClient.requestAddresses()
    console.log("MetaMask (or compatible wallet) is available!");
    connectButton.innerHTML = "Connected!"; // Update button text
  
  } else {
    // Wallet is not installed
    console.log("No wallet detected.");
    connectButton.innerHTML = "Please install MetaMask!"; // Update button text
  }
}

connectButton.onclick = connect;

