import CalcularPrecioRespuestaDto from '../../infrastructure/controller/dto/CalcularPrecioRespuestaDto';
import { inject, singleton } from 'tsyringe';
import VehiculoRepository from '../model/gateway/VehiculoRepository';
import Vehiculo from '../model/Vehiculo';



@singleton()
export default class CalcularPrecioUseCase {

    private _vehiculoRepository: VehiculoRepository

    constructor(@inject('VehiculoRepository') vehiculoRepository: VehiculoRepository) {
        this._vehiculoRepository = vehiculoRepository
    }

    public async calcularPrecio(placa: string): Promise<CalcularPrecioRespuestaDto> {

        try {
            let vehiculo: Vehiculo = await this._vehiculoRepository.obtener(placa)
        }
        catch {
            throw 'No existe'
        }



        return new CalcularPrecioRespuestaDto("RUZ170", 1669480661000, 1669489661000, 2, 0)
    }
}