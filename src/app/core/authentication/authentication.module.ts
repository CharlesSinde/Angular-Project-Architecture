import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoadConfigService } from './services/load-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticationComponent],
  providers: [LoadConfigService]
})
export class AuthenticationModule { }
