import { Request, Response } from 'express';
import Deal from '../models/dealModel';
import { pushDeals } from '../utils/database';
import { scrape } from '../utils/scrape';

// Get all deals
function getDeals(req: Request, res: Response) {
    Deal.find({}).then((deals) => {
        res.send({
            success: true,
            data: deals
        });
    }).catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message
        });
    });
}

// Get deals by id
function getDealByID(req: Request, res: Response) {
    const id = req.params.id;

    Deal.findById(id).then((deal) => {
        res.send({
            success: true,
            data: deal
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Add a deal/deals
function addDeals(req: Request, res: Response) {

    const deals = req.body;

    Deal.insertMany(deals).then((deals) => {
        res.send({
            success: true,
            data: deals
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Delete a deal by id
function deleteDealByID(req: Request, res: Response) {
    const id = req.params.id;

    Deal.findByIdAndDelete(id).then((deal) => {
        res.send({
            success: true,
            data: deal
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Delete all deals
function purgeDeals(req: Request, res: Response) {
    Deal.deleteMany({}).then(() => {
        res.send({
            success: true
        });
    }).catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message
        });
    });
}

export { getDeals, getDealByID, addDeals, deleteDealByID, purgeDeals };