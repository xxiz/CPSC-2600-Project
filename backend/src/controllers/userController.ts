import { Request, Response } from "express";
import User from "../models/userModel";

// Get all users
function getUsers(req: Request, res: Response) {
    
    User.find({}).then((users) => {
        res.send({
            success: true,
            data: users
        });
    }).catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message
        });
    });
}

// Get user by username
function getUserByUsername(req: Request, res: Response) {
    User.findOne({ username: req.params.username }).then((user) => {
        res.send({
            success: true,
            data: user
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Add a user
function addUser(req: Request, res: Response) {

    const user = req.body;

    // Check if user already exists
    if (User.findOne({ username: user.username })) {
        res.status(400).send({
            success: false,
            message: "User already exists"
        });
    }

    User.create(user).then((user) => {
        res.send({
            success: true,
            data: user
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Update a user by username
function updateUserByUsername(req: Request, res: Response) {

    const user = req.body;

    User.findOneAndUpdate({ username: req.params.username }, user).then((user) => {
        res.send({
            success: true,
            data: user
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Delete a user by username
function deleteUserByUsername(req: Request, res: Response) {

    const username = req.params.username;

    User.deleteOne({ username: username }).then((user) => {
        res.send({
            success: true,
            data: user
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

export { getUsers, getUserByUsername, addUser, updateUserByUsername, deleteUserByUsername };
