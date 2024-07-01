import Sonda from "../models/Sonda.js"

class SondaService{
    sondaModel = new Sonda()

    insertSondaService = async(id, temperatura) => {
        try {
            if(id < 1 || id > 5) throw error
            if(temperatura < -20 || temperatura > 100) throw error
            const data = await this.sondaModel.insert(id, temperatura)
            return data
        } catch (error) {
            throw error
        }
    }

    getSondasService = async() => {
        try {
            const data = await this.sondaModel.getAll()
            if(data.length === 0) throw error
            return data
        } catch (error) {
            throw error
        }
    }

    getByIdSondaService = async(id) => {
        try {
            if(id < 1 || id > 5) throw new Error("Número de sonda incorrecto")
            const data = await this.sondaModel.getById(id)
            if(data.length === 0) throw new Error(`No hay datos de sondas con id ${id}`)
            return data
        } catch (error) {
            throw error
        }
    }

    getStatisticsSondaService = async() => {
        try {
            const data = await this.sondaModel.getStatistics()
            return data
        } catch (error) {
            throw error
        }
    }

}

export default SondaService