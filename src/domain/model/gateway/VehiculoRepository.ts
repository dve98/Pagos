import Vehiculo from "../Vehiculo";

export default interface VehiculoRepository {
 
    obtener(placa: string): Promise<Vehiculo>;
  }