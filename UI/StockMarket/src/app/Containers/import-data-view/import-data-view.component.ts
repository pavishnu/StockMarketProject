import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/Services/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-import-data-view',
  templateUrl: './import-data-view.component.html',
  styleUrls: ['./import-data-view.component.css']
})
export class ImportDataViewComponent implements OnInit {
    selectedFile:File = null;
    constructor(private service:UploadService,private toastr: ToastrService) { }
  
    ngOnInit(): void {
        
    }
    onFileSelected(event){
      console.log(event);
      this.selectedFile=event.target.files[0];
    }
    onUpload(){
      this.service.Upload(this.selectedFile).subscribe(i=>{
        console.log(i);
        this.toastr.success("Uploaded Successfully.")
      },
      error => {
        console.log(error);
      });
    }

}
