"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../middleware/index");
const generative_ai_1 = require("@google/generative-ai");
const router = express_1.default.Router();
require("dotenv").config();
router.post("/prompt", index_1.authenticateJwt, (req, res) => {
    const { search } = req.body;
    console.log(search);
    const apiKey = process.env.API_KEY || "AIzaSyCUwj77-psrX8IppySncAPJ1WqeloME0yI";
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = search;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            res.status(201).json(text);
        });
    }
    run();
});
router.post("/summary", index_1.authenticateJwt, (req, res) => {
    const { search } = req.body;
    //console.log(search);
    const apiKey = process.env.API_KEY || "AIzaSyCUwj77-psrX8IppySncAPJ1WqeloME0yI";
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = `summarize this text ${search}`;
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            const text = response.text();
            res.status(201).json(text);
        });
    }
    run();
});
exports.default = router;
