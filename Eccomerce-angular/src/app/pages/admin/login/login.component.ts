import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card'
import { MatFormField } from '@angular/material/form-field'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { } from '@angular/material/progress-spinner'
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormField,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }

  loginObj: any = {
    username: '',
    password: ''
  }
  login() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == 'admin') {
      this.router.navigateByUrl('/products')
    } else {
      alert('Wrong Credentials')
    }
  }
}
