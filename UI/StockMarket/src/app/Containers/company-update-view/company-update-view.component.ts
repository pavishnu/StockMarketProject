import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/Services/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-update-view',
  templateUrl: './company-update-view.component.html',
  styleUrls: ['./company-update-view.component.css']
})
export class CompanyUpdateViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  company:Company;
  editCompany;
    constructor(private formBuilder: FormBuilder,private service:CompanyService,private toastr: ToastrService) {
    }
  
    ngOnInit(): void {
       this.editCompany=JSON.parse(localStorage.getItem("editCompany"));
       localStorage.removeItem("editCompany");
        this.registerForm = this.formBuilder.group({
          companyName: [this.editCompany.companyName, [Validators.required]],
          turnover: [this.editCompany.turnover, [Validators.required]],
          ceo: [this.editCompany.ceo, [Validators.required]],
          boardOfDirectors: [this.editCompany.boardOfDirectors, [Validators.required]],
          listedInSe: [this.editCompany.listedInSe, [Validators.required]],
          sector: [this.editCompany.sector, [Validators.required]],
          stockCode: [this.editCompany.stockCode, [Validators.required]],

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
        this.service.Update(this.company).subscribe(i=>{
            console.log(i);
            this.toastr.success("Updated successfully.")
          },
          error => {
            if(error.status==200){
              this.toastr.success("Updated successfully.")
            }
            else{
              console.log(error);
              this.toastr.error("Failed To Update.")
            }
          });
        
    }
}
