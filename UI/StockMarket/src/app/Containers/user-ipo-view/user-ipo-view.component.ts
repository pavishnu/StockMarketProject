import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/Services/ipo.service';
import { Ipo } from 'src/app/Models/ipo';

@Component({
  selector: 'app-user-ipo-view',
  templateUrl: './user-ipo-view.component.html',
  styleUrls: ['./user-ipo-view.component.css']
})
export class UserIpoViewComponent implements OnInit {
  ipoList:Ipo[];
  item:Ipo;
  addIpoClicked=false;
  editIpoClicked=false;
    constructor(private service:IpoService) { 
      this.service.GetAllIpo().subscribe(i=>{
        this.ipoList=i;
        console.log(i);
      })
  
    }
  
    ngOnInit(): void {
    }
  
  }
  

