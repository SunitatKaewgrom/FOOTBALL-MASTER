import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, catchError, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // formcontrol for login
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.route.navigate(['/admin']);
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') || ''
    }),
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    let payload = this.loginForm.value;
    this.auth.login(payload).subscribe((data) => {
      // console.log(data);
      if (data.status == 200) {
        localStorage.setItem('token', data.token);
        this.route.navigate(['/admin']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
