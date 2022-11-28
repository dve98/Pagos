'use strict';
import 'reflect-metadata';

import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { APIGatewayProxyResult } from 'aws-lambda';
import ResponseCustom from '../infrastructure/controller/response/ResponseCustom';
import IController from '../infrastructure/controller/IController'
import DefaultController from '../infrastructure/controller/DefaultController'
import CalcularPrecioController from '../infrastructure/controller/CalcularPrecioController'
import config from './config';



export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResult> => {

    let controller :IController; 
    switch (event.requestContext.http.path) {
        case '/calcularPrecio':
          controller = config(CalcularPrecioController);
          break;
        default:
          controller = config(DefaultController);
          break;
      }
    //console.log(JSON.stringify(event,null,2))
    return new ResponseCustom(400,'No hay metodos configurados')
}