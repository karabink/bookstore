import express from "express"
import authorControler from "./controler"

const authorRouter = new express.Router();

authorRouter.get("/",authorControler.getQuery);
authorRouter.post("/",authorControler.crateNew);
authorRouter.delete("/:id",authorControler.deleteById);
authorRouter.get("/:year", authorControler.findBornAfterYear);

export default authorRouter;