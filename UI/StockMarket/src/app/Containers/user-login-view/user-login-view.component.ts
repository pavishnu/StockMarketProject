import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login-view',
  templateUrl: './user-login-view.component.html',
  styleUrls: ['./user-login-view.component.css']
})
export class UserLoginViewComponent implements OnInit {
submitted=false;
registerForm: FormGroup;
wrongCred=false;
loginView=false;

  constructor(private formBuilder: FormBuilder,private service:UserService,private router:Router,private toastr: ToastrService) { 
    this.loginView=true;
  }

  ngOnInit(): void {
      
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.wrongCred=true;
      this.service.Login(this.f.email.value,this.f.password.value).subscribe(i=>{
          this.wrongCred=false;
            console.log(i);
            localStorage.setItem('currentUser', i.uname);
            localStorage.setItem('token', i.token);
            localStorage.setItem('userType',i.userType);
            console.log("details "+i.userType+" token "+i.token);
            this.loginView=false;
            if(i.userType=="admin"){
              this.loginView=false;
              this.toastr.success("Logged in as ADMIN.")
              this.router.navigateByUrl("/AdminLanding");
            }
            else{
              this.loginView=false;
              
              this.toastr.success("Logged in as USER.")
              this.router.navigateByUrl("/UserLanding");
            }

      },
      error => {
        this.wrongCred=true;
      });

      
      
  }
  onSignUpClick(){
    this.loginView=false;
    this.router.navigateByUrl("/SignUp");
  }

}
