import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageForm=new FormGroup({
'image':new FormControl(),
  })

  onSave()
  {
console.log(this.imageForm.value.image);
  }
  
}
