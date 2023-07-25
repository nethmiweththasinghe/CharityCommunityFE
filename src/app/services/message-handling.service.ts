import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlingService {

  constructor() { }

  public handleErrorMessage(errorMsg: string, title: string = 'Error') : void {
    let msg: any = {sverity: 'error', summary: title, detail: errorMsg};
    this.publishMessage(msg);
  }
  public handleSuccessMessage(successMsg: string, title: string = 'Success') : void {
    let msg: any = {sverity: 'success', summary: title, detail: successMsg};
    this.publishMessage(msg);
  }

  private publishMessage(msg: any): void {

  }

  // add(message: any): void;
}
