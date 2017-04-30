import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

// Can be useful for large export lists, which this UI Base may become
let components_list = [ SubmitButtonComponent];



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [components_list],
  declarations: [SubmitButtonComponent]
})
export class BaseUiModule { }
