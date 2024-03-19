import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { GoogleGenerativeAI } from "@google/generative-ai";
const router = express.Router();
require("dotenv").config();

router.post("/prompt", authenticateJwt, (req, res) => {
  const { search } = req.body;
  console.log(search);
  const apiKey =
    process.env.API_KEY || "AIzaSyCUwj77-psrX8IppySncAPJ1WqeloME0yI";

  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(apiKey);

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = search;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(201).json(text);
  }

  run();
});
router.post("/summary", authenticateJwt, (req, res) => {
  const { search } = req.body;
  //console.log(search);
  const apiKey =
    process.env.API_KEY || "AIzaSyCUwj77-psrX8IppySncAPJ1WqeloME0yI";

  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(apiKey);

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `summarize this text ${search}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(201).json(text);
  }

  run();
});
export default router;
