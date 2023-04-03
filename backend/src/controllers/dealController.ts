import express, { Request, Response } from 'express';
import Deal from '../models/dealModel';
import filterTrendingDeals from '../utils/trending';
import getTrending from '../utils/trending';


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

function getTrendingDeals(req: Request, res: Response) {
    Deal.find({}).then((deals) => {
        
        deals = filterTrendingDeals(deals)
        
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

function addDeals(req: Request, res: Response) {

    const deals = req.body;

    Deal.insertMany(deals).then(() => {
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

export { getDeals, getTrendingDeals, getDealByID, addDeals, deleteDealByID, purgeDeals };