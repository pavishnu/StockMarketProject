import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/Services/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-register-view',
  templateUrl: './company-register-view.component.html',
  styleUrls: ['./company-register-view.component.css']
})
export class CompanyRegisterViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  company:Company;
    constructor(private formBuilder: FormBuilder,private service:CompanyService,private toastr: ToastrService) { }
  
    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
          companyName: ['', [Validators.required]],
          turnover: ['', [Validators.required]],
          ceo: ['', [Validators.required]],
          boardOfDirectors: ['', [Validators.required]],
          listedInSe: ['', [Validators.required]],
          sector: ['', [Validators.required]],
          stockCode: ['', [Validators.required]],

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
        this.company=new Company();
        this.company.CompanyName=this.f.companyName.value;
        this.company.Turnover=this.f.turnover.value;
        this.company.Ceo=this.f.ceo.value;
        this.company.BoardOfDirectors=this.f.boardOfDirectors.value;
        this.company.ListedInSe=this.f.listedInSe.value;
        this.company.Sector=this.f.sector.value;
        this.company.StockCode=this.f.stockCode.value;
        this.company.Brief="  ";
        this.service.Register(this.company).subscribe(i=>{
            console.log(i);
            this.toastr.success("Registered successfully.")
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
  
        
    }
}
