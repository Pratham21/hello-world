import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface SignupModel {
  title:string;
  message:string;
}
@Component({  
    selector: 'confirm1',
    templateUrl: './SignupModal.component.html', 
})
export class SignupComponent extends DialogComponent<SignupModel, boolean> implements  SignupModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
   confirm1() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}