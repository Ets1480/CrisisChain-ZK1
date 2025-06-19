const knownHashes = new Set([
  "7b8eace946d24f56b0e1fa3e759dabcfd8dfdc9eb1e55aa2f4dcb4e071be13b4", // refugee001
]);

let isAdmin = false;
let walletConnected = false;

document.getElementById("connectBtn").onclick = async () => {
  if (window.cardano && window.cardano.lace) {
    const api = await window.cardano.lace.enable();
    const addresses = await api.getUsedAddresses();
    walletConnected = true;
    isAdmin = true; // In real contract, only owner should be admin
    document.getElementById("status").innerText = `🟢 Wallet connected:\n${addresses[0]}`;
  } else {
    document.getElementById("status").innerText = "❌ Please use a desktop browser with Lace Wallet.";
  }
};

async function hashData(data) {
  const buffer = new TextEncoder().encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function generateProof() {
  const input = document.getElementById("identityInput").value.trim();
  if (!input) return alert("Please enter an identity.");
  const hashed = await hashData(input);
  document.getElementById("status").innerText = `🔐 ZK Proof (simulated):\n${hashed}`;
  return hashed;
}

async function verifyProof() {
  const proof = await generateProof();
  const valid = knownHashes.has(proof);
  document.getElementById("status").innerText += `\n\nVerification: ${valid ? "✅ Valid Proof" : "❌ Invalid Proof"}`;
}

// Simulated smart contract interaction (admin only)
async function registerIdentity() {
  if (!isAdmin) return alert("Only admins can register identities.");
  const input = document.getElementById("identityInput").value.trim();
  if (!input) return alert("Enter an identity to register.");
  const hashID = await hashData(input);
  knownHashes.add(hashID); // Simulate writing to contract storage
  document.getElementById("status").innerText = `✅ Registered new identity hash:\n${hashID}`;
}

document.getElementById("generateBtn").onclick = generateProof;
document.getElementById("verifyBtn").onclick = verifyProof;

// Optional: Add button if you want to allow admin registration from UI
const registerBtn = document.createElement("button");
registerBtn.innerText = "📝 Register Identity (Admin)";
registerBtn.onclick = registerIdentity;
document.querySelector(".button-group").appendChild(registerBtn);
