const express = require('express');
const path = require('path');
const app = express();

// Serve all static files from the root folder
app.use(express.static(__dirname));

// For SPA support
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
