"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/deals', (req, res) => {
    res.send('All Deals');
});
exports.default = router;
