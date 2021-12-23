import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public accountNumber: string = '';
  public passportNumber: string = '';
  public password: string = '';
  public warningMessage: string;

  constructor(public authService: AuthenticationService, public router: Router) { }

  onRegister() {
    this.authService.register(this.accountNumber, this.passportNumber, this.password)
    .subscribe(res => {
      // Add some logic to check error => set warningMessage

      // if not errors - navigate to home
      if(!this.warningMessage) {
        this.router.navigate(['/profile']);
      }
    }, error => {
      this.warningMessage = "Invalid Credentials!";
      console.error(error);
    } );
  }

}
