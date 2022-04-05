import { ILoanRequest } from "./domain/ILoanRequest";
import { AppState } from './state/AppState';

export class MyApp {
  public loanRequestResult: ILoanRequest;
  amount = 2000;
  period = 12;
  userId = "";
  showResult :boolean;

  constructor(private appState: AppState) {
  }
  
  async sendForm() {
    
    if (!this.isCorrectInput()) {
      return false;
    }
    
     let loanRequest: ILoanRequest = { requestedAmount: this.amount, requestedPeriod: this.period, userIdentity: this.userId }
     
     this.loanRequestResult = await this.appState.postLoanRequest(loanRequest);

     if (this.loanRequestResult.message === "Approved") {
       this.showResult = true;
       return false;
     }

     alert(this.loanRequestResult.message)
     return false;
  };

  private isCorrectInput(): boolean{
    if(this.userId.length != 11){
      alert("User Identity Code must be 11 numbers long!")
      return false;
    }
    if (this.amount > 10000){
      alert("Max amount is 10000!")
      return false;
    }
    if (this.amount < 2000){
      alert("Min amount is 2000!")
      return false;
    }
    if (this.period > 60){
      alert("Max period is 60!")
      return false;
    }
    if (this.period < 12){
      alert("Min period is 12!")
      return false;
    }
    return true;
  }
}
