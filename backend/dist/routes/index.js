"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deals_1 = __importDefault(require("./deals"));
const filters_1 = __importDefault(require("./filters"));
const router = (0, express_1.Router)();
// /api/v1 router
router.use('/api/v1/', deals_1.default);
router.use('/api/v1/', filters_1.default);
exports.default = router;
