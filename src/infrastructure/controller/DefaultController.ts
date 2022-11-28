import { APIGatewayProxyEventV2 } from "aws-lambda";
import { singleton } from "tsyringe";
import IController from "./IController";
import ResponseCustom from "./response/ResponseCustom";

@singleton()
export default class DefaultController implements IController {
  async execute(_event: APIGatewayProxyEventV2): Promise<ResponseCustom> {
    return new ResponseCustom(404, 'Method not found');
  }
  
}