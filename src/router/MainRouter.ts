import { Router } from "express";
import * as homeController from "../controllers/homeController";
export const router = Router();

router.get("/", homeController.Home);
router.get("/dog", homeController.Dogs);
router.get("/cat", homeController.Cats);
router.get("/fish", homeController.Fishes);
router.post("/search", homeController.Search);
