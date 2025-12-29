// server.js - Custom Express Server (MERN-style helper)
// This file was added with help from a senior to allow custom backend logic
// while keeping the power of Next.js for the frontend!

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom middleware example (Class 12 student logic)
  server.use((req, res, nextMiddleware) => {
    console.log(`[SmartCity Log]: ${req.method} request to ${req.url}`);
    nextMiddleware();
  });

  // Let Next.js handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Smart City Dashboard ready on http://localhost:${PORT}`);
    console.log(`> Mode: ${dev ? 'Development' : 'Production'}`);
  });
});
