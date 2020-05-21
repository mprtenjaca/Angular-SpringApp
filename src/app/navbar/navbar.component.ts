import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { LoginService } from '../login/login.service';
import { User } from '../user/user.model';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean;
  currentLanguage: string;

  constructor(
    private loginService: LoginService,
    public userService: UserService,
    private translate: TranslateService,
    private router: Router) {
    this.currentLanguage = 'Hrvatski';
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.userService.currentUser = currentUser;
    });
  }


  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  logout() {
    this.loginService.logout();
    this.userService.currentUser = null;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return !!this.userService.currentUser;
  }

  onLanguageChange(currentLanguage: string) {
    this.translate.use(currentLanguage);
    if (currentLanguage === 'hr'){
      this.currentLanguage = 'Hrvatski';
    }else{
      this.currentLanguage = 'English';
    }
  }
}
