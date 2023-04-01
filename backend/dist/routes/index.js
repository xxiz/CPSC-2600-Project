"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deals_1 = __importDefault(require("./deals"));
const scrapeResult_1 = __importDefault(require("./scrapeResult"));
const users_1 = __importDefault(require("./users"));
const notify_1 = __importDefault(require("./notify"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('no');
});
router.use('/api/v1/deals', deals_1.default);
router.use('/api/v1/scrapes', scrapeResult_1.default);
router.use('/api/v1/users', users_1.default);
router.use('/api/v1/notify', notify_1.default);
exports.default = router;
