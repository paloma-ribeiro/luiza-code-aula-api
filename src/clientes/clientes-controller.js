class ClienteController {
    get(req, res) {
        return res.send({
            'name': 'Paloma',
            'address': 'Rua da Amargura',
            'city': 'São Paulo'
        })
    }
}

export default ClienteController