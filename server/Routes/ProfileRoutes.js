import express from "express";
const router = express.Router();
import { list,show,create,update,remove } from "../Controllers/ProfilesController";

router.get("/profiles", list);
router.get("/profiles/:id", show);
router.post("/profiles", create);
router.put("/profiles/:id", update);
router.delete("/profiles/:id", remove);

export default router;