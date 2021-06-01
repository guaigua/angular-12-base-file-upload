import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  uploadForm =  new FormGroup({});
  selected = 'PDF';

  public uploader:FileUploader = new FileUploader({
    isHTML5: true,
    queueLimit: 1
  });
  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder ) { }

  uploadSubmit(){
        for (var i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          console.log(fileItem.name);
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          data.append( 'dataType', this.uploadForm.controls.type.value);
          console.log('Data Ready',data);
          //this.uploadFile(data).subscribe(data => alert(data.message));
        }
        this.uploader.clearQueue();
  }

  uploadFile(data: FormData) {
    debugger
    console.log('Data Ready',data)
    return;
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });

  }   
}
