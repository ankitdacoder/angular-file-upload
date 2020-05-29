import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import {HttpEvent, HttpEventType, HttpResponse,HttpProgressEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculateService } from 'src/app/services/calculate.service';
@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {

  selectedFiles:any;
  currentFile:any;
  uploaded = 0;
  message = '';
  data:any;
  result:any;
  isUploaded:boolean=false;
  showResult:boolean=false;
  testObject:any = [];
 
  progress = { loaded : 0 , total : 0 };

  constructor(private uploadService: UploadService,private calculateService:CalculateService) { }

  ngOnInit(): void {

  }

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.uploaded=0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe( 
      (data: any) => { 
       
        if(data.type == 1 && data.loaded && data.total){
          console.log("gaju");
          this.progress.loaded = data.loaded;
          this.progress.total = data.total;
          this.uploaded = Math.round(100 * this.progress.loaded / this.progress.total );
        }
        else if(data.body){
          this.isUploaded=true;
          this.data=JSON.parse(JSON.stringify(data.body.data))
         }

       },
       err => {
        this.uploaded = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
      );
  
    this.selectedFiles = undefined;
  }

  calculate()
  {
    this.calculateService.calculatePlate().subscribe( 
      (data: any) => { 
       console.log(data)
       if(data.status)
        { this.showResult=true
          this.result=JSON.parse(JSON.stringify(data)).data
          this.result=this.result[0].data 
        }else
        {
          alert(data.message)
                  
        }
      })
  }

}
