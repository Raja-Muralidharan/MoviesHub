import { genreCreationDTO } from './../genres.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router, ) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO){
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }
}
