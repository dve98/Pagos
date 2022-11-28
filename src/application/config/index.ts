import ObtenerVehiculoAdapter from '../../infrastructure/adapter/ObtenerVehiculoAdapter';
import { container } from 'tsyringe';
import configEnv from './configEnv';

export default function<IController>(Controller:any): IController {
container.register("Gestion_URL",{
    useValue:configEnv.gestionVehiculos
})
container.register('VehiculoRepository',{
    useClass: ObtenerVehiculoAdapter
})

  return container.resolve(Controller);
};