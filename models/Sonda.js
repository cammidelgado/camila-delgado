class Sonda{
    
    sondas = []

    insert = async(id, temperatura)=>{
        const newSonda = {id, temperatura: Number(temperatura)}
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

    getStatistics = async () => {
        const estadisticas = {
            cantidadTotalMuestras: this.sondas.length,
            temperaturaSondas: {}
        }

        this.sondas.forEach(sonda =>{
            if(!estadisticas.temperaturaSondas[sonda.id]){
                estadisticas.temperaturaSondas[sonda.id] = {
                    cantidad: 0,
                    promedio: 0,
                    totalTemp: 0
                }
            } 
            const sondaActual = estadisticas.temperaturaSondas[sonda.id]
            sondaActual.cantidad++
            sondaActual.totalTemp += sonda.temperatura
            sondaActual.promedio = sondaActual.totalTemp / sondaActual.cantidad
            
        })
        return estadisticas
    }


}

export default Sonda