class Sonda{
    
    sondas = []

    insert = async(id, temperatura)=>{
        const newSonda = {id, temperatura}
        this.sondas.push(newSonda)
        return this.sondas[this.sondas.length-1]
    }

    getAll = async () => {
        return this.sondas
    }

    getById = async(id) => {
        const sondasId = this.sondas.filter(sonda => sonda.id === id)
        return sondasId
    }


}

export default Sonda