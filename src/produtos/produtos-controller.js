class ProdutoController {
    get(req, res) {
        return res.send({
            'name': 'sapato',
            'price': 200,
            'description': 'sapato amarelo'
        })
    }
}

export default ProdutoController