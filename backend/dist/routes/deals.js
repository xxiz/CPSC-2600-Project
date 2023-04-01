"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dealController_1 = require("../controllers/dealController");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    (0, dealController_1.getDeals)(req, res);
});
router.post('/', (req, res) => {
    (0, dealController_1.addDeals)(req, res);
});
router.delete('/', (req, res) => {
    (0, dealController_1.purgeDeals)(req, res);
});
router.get('/:id', (req, res) => {
    (0, dealController_1.getDealByID)(req, res);
});
router.delete('/:id', (req, res) => {
    (0, dealController_1.deleteDealByID)(req, res);
});
router.get('/run', (req, res) => {
    res.send('no');
});
exports.default = router;
