import Vehiculo from "../../domain/model/Vehiculo";
import { inject, singleton } from "tsyringe";
import axios from 'axios'
import VehiculoRepository from "../../domain/model/gateway/VehiculoRepository";
@singleton()
export default class ObtenerVehiculoAdapter implements VehiculoRepository{
    private gestionUrl: string
    constructor(@inject('Gestion_URL') gestionUrl: string) {
        this.gestionUrl = gestionUrl
    }

    async obtener(placa:string): Promise<Vehiculo>{
        let vehiculo: Vehiculo


        vehiculo = await axios.get(this.gestionUrl+placa)


        return vehiculo
    }

}