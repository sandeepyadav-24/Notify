"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInput = void 0;
const zod_1 = require("zod");
exports.userInput = zod_1.z.object({
    email: zod_1.z.string().min(10).max(50),
    password: zod_1.z.string().min(10).max(50),
});
