import { Router } from "express";
import Deals from "./deals";
import Scrapes from "./scrapes";
import Users from "./users";
import Notify from "./notify";

const router = Router();

router.get("/", (req, res) => {
  res.send("no");
});

router.use("/api/v1/deals", Deals);
router.use("/api/v1/scrapes", Scrapes);
router.use("/api/v1/users", Users);
router.use("/api/v1/notify", Notify);

export default router;
