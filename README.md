# 🛡️ CrisisChain-ZK – Zero-Knowledge Aid Distribution on Midnight & Cardano

**Submission for:** Midnight Data-Protection Challenge  
**Alternate Track Compatibility:** Cardano (Aiken, VESPR)

---

## 🌍 Overview

**CrisisChain-ZK** is a decentralized application (DApp) designed to distribute humanitarian aid transparently and securely using **zero-knowledge proofs (ZKPs)**. Built for the African context, it enables verified users to prove their eligibility without revealing private identity data.

This project supports deployment on both **Midnight** (using Compact smart contracts and Lace Wallet) and **Cardano** (using VESPR wallet and Plutus/Aiken), ensuring broad ecosystem compatibility.

---

## 🎯 Core Features

- ✅ **ZK Identity Verification** – Users prove identity without exposing it
- 🔐 **Token-Based Claim System** – Enables secure aid claims via identity hashes
- 🧠 **Midnight Smart Contract** – Written in Compact with zkproof support
- 🔗 **Lace & VESPR Wallet Support** – Connect via CIP-30 for transactions
- 🌐 **Next.js Frontend** – With mobile-first soft-pink UI
- ⚙️ **API Handlers** – `register.js` and `verify.js` simulate identity hashing and proof checks

---

## 🧱 Architecture

| Component        | Technology                         |
|------------------|-------------------------------------|
| Smart Contract   | Midnight Compact / Cardano Aiken    |
| Frontend         | Next.js + Tailwind CSS              |
| API Backend      | Node.js (Express or Vercel API)     |
| Wallets          | Lace (Midnight), VESPR (Cardano)    |
| ZK Proof         | Simulated (Poseidon/SHA256 planned) |

---

## 🛠 Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Ets1480/crisischain-zk.git
cd crisischain-zk
