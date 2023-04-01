import { Router } from "express";
import { getUsers, getUserByUsername, addUser, updateUserByUsername, deleteUserByUsername } from "../controllers/userController";

const router = Router();

router.get("/", (req, res) => {
    getUsers(req, res);
});

router.get("/:username", (req, res) => {
    getUserByUsername(req, res);
});

router.post("/", (req, res) => {
    addUser(req, res);
});

router.put("/:username", (req, res) => {
    updateUserByUsername(req, res);
});

router.delete("/:username", (req, res) => {
    deleteUserByUsername(req, res);
});

export default router;
