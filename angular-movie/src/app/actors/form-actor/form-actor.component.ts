import { actorCreationDTO } from './../actors.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  model: actorCreationDTO | any;

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
  this.form = this.formBuilder.group({
   name: ['',{
     Validators: [Validators.required]
   }],
   dateofBirth: '',
   picture: ''

  });

  if(this.model !== undefined){
    this.form.patchValue(this.model);
  }
  }

  saveChanges(){
  this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image: any){
  this.form.get('picture')?.setValue(image);
  }

}
