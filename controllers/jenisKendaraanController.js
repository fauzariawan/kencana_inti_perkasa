const models = require("../models")

class jenisKendaraan{
    static async getAll(req, res, next){ 
        try {
            let result = await models.Type.findAll()
            res.send(result)
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    }
}

module.exports = jenisKendaraan