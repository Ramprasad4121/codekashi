// server.js
import express from "express";
import scanHandler from "./api/scan.js";

const app = express();

app.use(express.json());

app.post("/scan", (req, res) => {
  scanHandler(req, res);
});

app.listen(3001, () => {
  console.log("Oracle backend running on http://localhost:3001/scan");
});