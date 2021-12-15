import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/Models/ipo';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IpoService } from 'src/app/Services/ipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo-register-view',
  templateUrl: './ipo-register-view.component.html',
  styleUrls: ['./ipo-register-view.component.css']
})
export class IpoRegisterViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  ipo:Ipo;
    constructor(private formBuilder: FormBuilder,private router:Router,private service:IpoService,private toastr: ToastrService) { }
  
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        
        companyName: ['', [Validators.required]],
        stockExchange: ['', [Validators.required]],
        pricePerShare: ['', [Validators.required]],
        noOfShares: ['', [Validators.required]],
        openDateTime: ['', [Validators.required]],
        remarks: ['', [Validators.required]],


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
        this.ipo=new Ipo();
        this.ipo.CompanyName=this.f.companyName.value;
        this.ipo.StockExchange=this.f.stockExchange.value;
        this.ipo.PricePerShare=this.f.pricePerShare.value;
        this.ipo.NoOfShares=this.f.noOfShares.value;
        this.ipo.OpenDateTime=this.f.openDateTime.value;
        this.ipo.Remarks=this.f.remarks.value;
        this.service.Register(this.ipo).subscribe(i=>{
            console.log(i);
            
          },
          error => {
            if(error.status==200){
              this.toastr.success("Registered successfully.")
            }
            else{
              console.log(error);
              this.toastr.error("Failed To Register.")
            }
          });
          if(localStorage.getItem("userType")=="admin"){
            this.router.navigateByUrl("/AdminLanding");
          }
          else{
            this.router.navigateByUrl("/UserLanding");
          }
          
          
    }
}