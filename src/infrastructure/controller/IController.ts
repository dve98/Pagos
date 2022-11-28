import { APIGatewayProxyEventV2 } from "aws-lambda";
import ResponseCustom from "./response/ResponseCustom";

export default interface IController {
  execute(event: APIGatewayProxyEventV2):Promise<ResponseCustom>;
}