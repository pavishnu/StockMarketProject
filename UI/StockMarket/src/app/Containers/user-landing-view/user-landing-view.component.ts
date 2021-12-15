import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-landing-view',
  templateUrl: './user-landing-view.component.html',
  styleUrls: ['./user-landing-view.component.css']
})
export class UserLandingViewComponent implements OnInit {
  compareCompanyView=false;
  ipoView=false;
  otherView=false;
    constructor(private router:Router,private toastr: ToastrService) { }
  
    ngOnInit(): void {
    }
  
    onCompareCompanyClick(){
      this.compareCompanyView=!this.compareCompanyView;
      this.ipoView=false;
      this.otherView=false;
    }
    
    onIpoClick(){
      this.ipoView=!this.ipoView;
      this.compareCompanyView=false;
      this.otherView=false;
    }
    onOtherClick(){
      this.otherView=!this.otherView;
      this.compareCompanyView=false;
      this.ipoView=false;
    }
    onLogOutClick(){
      localStorage.clear();
      this.toastr.success("Logged Out successfully.")
      this.router.navigateByUrl("/SignIn");
    }
  
  }