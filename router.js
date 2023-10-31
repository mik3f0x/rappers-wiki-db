import { Router } from "express";
import * as controllers from "./controller.js";

const router = Router();

router.get("/", controllers.getRappers);
router.get("/name/:Name", controllers.getRapper);
router.post("/", controllers.createRapper);
router.put("/name/:Name", controllers.updateRapper);
router.delete("/name/:Name", controllers.deleteRapper);

export default router;