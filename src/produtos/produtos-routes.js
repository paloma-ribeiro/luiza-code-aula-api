import express from "express"

const router = express.Router()

import ProdutoController from "./produtos-controller"

const produtoController = new ProdutoController()

router.get('/', (req, res) => produtoController.get(req, res))

export default router