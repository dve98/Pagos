import { singleton } from 'tsyringe';
import IController from './IController';
import ResponseCustom from './response/ResponseCustom';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import CalcularPrecioRespuestaDto from './dto/CalcularPrecioRespuestaDto'
import CalcularPrecioUseCase from '../../domain/usecase/CalcularPrecioUseCase'


@singleton()
export default class CalcularPrecioController implements IController{


    private calcularPrecioUseCase: CalcularPrecioUseCase

    constructor(calcularPrecioUseCase:CalcularPrecioUseCase){
        this.calcularPrecioUseCase = calcularPrecioUseCase
    }
    async execute(event: APIGatewayProxyEventV2): Promise<ResponseCustom> {
        let placa : string
        let calcularPrecioRespuestaDto:CalcularPrecioRespuestaDto
        try{
            placa = JSON.parse(event.body!).placa
            calcularPrecioRespuestaDto = await this.calcularPrecioUseCase.calcularPrecio(placa)

        }
        catch(err){
            console.log(err)
            return new ResponseCustom(500, 'Internal Server Error');
        }
        return new ResponseCustom(200, calcularPrecioRespuestaDto)


    }
  
}