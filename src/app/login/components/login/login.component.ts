import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@app/shared";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LoginComponentModel } from "../../utils";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginComponentModel = new LoginComponentModel();
  error: string | null;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model.username, this.model.password).subscribe(res => {
      if (!res) {
        this.error = this.translate('UserNameOrPasswordInvalid');
      } else {
        window.location.href = window.location.origin;
      }
    });
  }

  translate(key: string): string {
    return 'Login.' + key;
  }
}
