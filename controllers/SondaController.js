import SondaService from "../service/SondaService.js"

class SondaController{

    sondaService = new SondaService()

    insertSonda = async(req, res) => {
        try {
            const {id, temperatura} = req.body
            const data = await this.sondaService.insertSondaService(id, temperatura)
            res.status(200).send({msg:"Sonda ingresada correctamente", sonda: data})
        } catch (error) {
            res.status(400).send({errorMsg: "datos no válidos"})
        }
    }

    getSondas = async(req, res) => {
        try {
            const data = await this.sondaService.getSondasService()
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send({errorMsg: "No hay datos de sondas"})
        }
    }  

    getSondasById = async(req, res) => {
        try {
            const {id} = req.params
            const data = await this.sondaService.getByIdSondaService(id)
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send({errorMsg: error.message})
        }
    }
}

export default SondaController