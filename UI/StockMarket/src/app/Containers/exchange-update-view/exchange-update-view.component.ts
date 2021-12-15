import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Exchange } from 'src/app/Models/exchange';
import { ExchangeService } from 'src/app/Services/exchange.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exchange-update-view',
  templateUrl: './exchange-update-view.component.html',
  styleUrls: ['./exchange-update-view.component.css']
})
export class ExchangeUpdateViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  exchange:Exchange;
  editExchange;
    constructor(private formBuilder: FormBuilder,private service:ExchangeService,private toastr: ToastrService) {
    }
  
    ngOnInit(): void {
       this.editExchange=JSON.parse(localStorage.getItem("editExchange"));
       localStorage.removeItem("editExchange");
        this.registerForm = this.formBuilder.group({
          id: [this.editExchange.id, [Validators.required]],
          stockExchangeName: [this.editExchange.stockExchangeName, [Validators.required]],
          brief: [this.editExchange.brief, [Validators.required]],
          contactAddress: [this.editExchange.contactAddress, [Validators.required]],
          remarks: [this.editExchange.remarks, [Validators.required]],

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
        this.exchange=new Exchange();
        this.exchange.Id=this.f.id.value;
        this.exchange.StockExchangeName=this.f.stockExchangeName.value;
        this.exchange.Brief=this.f.brief.value;
        this.exchange.ContactAddress=this.f.contactAddress.value;
        this.exchange.Remarks=this.f.remarks.value;
        this.service.Update(this.exchange).subscribe(i=>{
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

