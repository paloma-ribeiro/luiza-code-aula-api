import express from "express"

const router = express.Router()

import ClienteController from "./clientes-controller"

const clienteController = new ClienteController()

router.get('/', (req, res) => clienteController.get(req, res))

export default router