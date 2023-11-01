import { Router } from "express";
import * as controllers from "./controller.js";

const router = Router();

router.get("/", controllers.getRappers);
router.get("/name/:name", controllers.getRapperByName);
router.post("/", controllers.createRapper);
router.put("/name/:name", controllers.updateRapper);
router.delete("/name/:name", controllers.deleteRapper);

router.get("/:id", controllers.getRapper);

export default router;