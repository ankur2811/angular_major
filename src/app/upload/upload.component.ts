import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  imageForm=new FormGroup({
    'image':new FormControl( Validators.required ),  
    'video':new FormControl(Validators.required),
  })

  onSave()
  {
    console.log(this.imageForm.value.image);
    console.log(this.imageForm.value.video);
    this.router.navigateByUrl('/video');

  }
  
}
