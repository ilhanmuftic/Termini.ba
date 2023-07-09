import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup =  this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {

  }

  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.loginService.login(username, password)
      .subscribe(response => {
        // handle successful login
      }, error => {
        // handle failed login
      });
  }
}
