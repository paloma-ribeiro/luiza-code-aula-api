import express from "express"
import RouterProdutos from '../produtos/produtos-routes'
import RouterClientes from '../clientes/clientes-routes'

const router = express.Router()

router.use('/produtos', RouterProdutos)
router.use('/clientes', RouterClientes)

export default router