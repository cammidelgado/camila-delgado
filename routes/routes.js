import { Router } from "express";
import SondaController from "../controllers/SondaController.js";

const routes = Router()
const sondaController = new SondaController()

routes.post("/", sondaController.insertSonda)
routes.get("/", sondaController.getSondas)
routes.get("/estadistica", sondaController.getStatisticsSonda)
routes.get("/:id", sondaController.getSondasById)


export default routes