import { IHttpClient } from "aurelia";
import {ILoanRequest} from "../domain/ILoanRequest"

export class AppState {

    loanRequest: ILoanRequest

    constructor(@IHttpClient private http: IHttpClient) {
    }

    async postLoanRequest(loanRequest: ILoanRequest): Promise<ILoanRequest>{
        try{
            let result = await this.http.post('http://localhost:8080/loanCalc', JSON.stringify(loanRequest)); 
            let json = await result.json();

            if (isLoanRequest(json)){
                this.loanRequest = json;
                return json;
            }
        }catch(error){
            console.log(error);
        }
    }
}
// type guard for ILoanRequest
function isLoanRequest(request: any): request is ILoanRequest {
    return (request as ILoanRequest).availableAmount !== undefined;
}