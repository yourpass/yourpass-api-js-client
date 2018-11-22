import { Fetch } from "../fetch/index";
import { Enviroment } from "../constants/enviroments";

export interface ClientOptions {
    fetch: Fetch;
    enviroment?: Enviroment;
}