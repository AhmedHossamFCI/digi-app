import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserTypes } from '@app/shared';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser = this.authService.CurrentUser;
  userTypeEnum = UserTypes;
  constructor(private authService: AuthenticationService) { }
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  hasClaim(id) {
    return this.authService.hasClaim(id);
  }
}
