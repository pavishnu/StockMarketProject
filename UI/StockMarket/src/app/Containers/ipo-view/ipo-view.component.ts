import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/Models/ipo';
import { IpoService } from 'src/app/Services/ipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo-view',
  templateUrl: './ipo-view.component.html',
  styleUrls: ['./ipo-view.component.css']
})
export class IpoViewComponent implements OnInit {
  ipoList:Ipo[];
  item:Ipo;
  addIpoClicked=false;
  editIpoClicked=false;
    constructor(private service:IpoService
      ,private toastr: ToastrService,private router:Router) { 
      this.service.GetAllIpo().subscribe(i=>{
        this.ipoList=i;
        console.log(i);
      })
  
    }
  
    ngOnInit(): void {
    }
  
    onEdit(item){
      localStorage.setItem("editIpo",JSON.stringify(item));
      this.service.editIpo=item;
      this.addIpoClicked=false;
      this.editIpoClicked=true;
    }
    onAdd(){
      this.editIpoClicked=false;
      this.addIpoClicked=true;
    }
    onDelete(id){
      this.service.Delete(id).subscribe(i=>{
        console.log(i);
        
      },
      error => {
        if(error.status==200){
          this.toastr.success("Deleted successfully.")
        }
        else{
          console.log(error);
          this.toastr.error("Failed To Delete.")
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
  
