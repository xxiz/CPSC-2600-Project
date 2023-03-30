"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const connection = mongoose_1.default.connect(process.env.MONGO_URI || "mongodb://user:pass@localhost:54413", {
    useUnifiedTopology: true,
});
if (connection) {
    console.log('Connected to MongoDB');
}
else {
    console.log('Error connecting to MongoDB');
}
exports.default = connection;
