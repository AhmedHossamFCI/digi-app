import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { AuthenticationService, GuardService, LocaleService, LoginGuardService, MaterialModule, WordWrapPipe } from "./utils";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [WordWrapPipe],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule
    , MaterialModule],
  exports: [
    CommonModule, FormsModule, HttpClientModule
    , TranslateModule
    , MaterialModule, WordWrapPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AuthenticationService, LoginGuardService, LocaleService, GuardService]
    };
  }
}
