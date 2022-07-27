import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_ENDPOINT = process.env.API_ENDPOINT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Nothing here");
});

app.get("/all", async (req, res) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/all`);

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.log(error);
  }
});

app.get("/name/:countryName", async (req, res) => {
  const countryName = req.params.countryName;
  try {
    const response = await fetch(`${API_ENDPOINT}/name/${countryName}`);

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.log(error);
  }
});

app.get("/region/:regionName", async (req, res) => {
  const regionName = req.params.regionName;

  try {
    const response = await fetch(`${API_ENDPOINT}/region/${regionName}`);

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Listening to port 3000");
});
