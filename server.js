const express = require('express');
const path = require('path');
const app = express();

// Serve all static files from the root folder
app.use(express.static(__dirname));

// Homepage route to show backend is running
app.get('/', (req, res) => {
  res.send('CrisisChain-ZK Backend is Running 🚀');
});

// For SPA support (catch all other routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
