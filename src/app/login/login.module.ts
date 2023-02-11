import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { LoginComponent } from "./components";
import { LoginRoutingModule } from "./login.routing";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
