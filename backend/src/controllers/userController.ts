import { IDeal } from "./../types/index";
import express, { Request, Response } from "express";
import User from "../models/userModel";
import Deal from "../models/dealModel";

function getUsers(req: Request, res: Response) {
  User.find({})
    .then((users) => {
      res.send({
        success: true,
        data: users,
      });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message,
      });
    });
}

async function getUserByUsername(req: Request, res: Response) {
  try {
    const user = await User.findOne({ username: req.params.username }).populate(
      "history"
    );
    if (!user) {
      res.status(404).send({
        success: false,
        message: "User not found",
      });
      return;
    }

    const history = user.history || [];
    const dealPromises = history.map((historyDeal) =>
      Deal.findById(historyDeal)
    );
    const deals = await Promise.all(dealPromises);

    res.send({
      success: true,
      data: {
        ...user.toObject(),
        history: deals.filter((deal) => !!deal),
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.message,
    });
  }
}

function addUser(req: Request, res: Response) {
  const user = req.body;

  // Check if user already exists
  if (User.findOne({ username: user.username })) {
    res.status(400).send({
      success: false,
      message: "User already exists",
    });
  }

  User.create(user)
    .then((user) => {
      res.send({
        success: true,
        data: user,
      });
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    });
}

function updateUserByUsername(req: Request, res: Response) {
  const user = req.body;

  User.findOneAndUpdate({ username: req.params.username }, user)
    .then((user) => {
      res.send({
        success: true,
        data: user,
      });
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    });
}

function deleteUserByUsername(req: Request, res: Response) {
  const username = req.params.username;

  User.deleteOne({ username: username })
    .then((user) => {
      res.send({
        success: true,
        data: user,
      });
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    });
}

export {
  getUsers,
  getUserByUsername,
  addUser,
  updateUserByUsername,
  deleteUserByUsername,
};
