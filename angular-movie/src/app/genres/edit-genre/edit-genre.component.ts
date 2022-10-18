import { genreCreationDTO } from './../genres.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) { }

 model: genreCreationDTO = {name: 'Drama'}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      //alert(params['id']);
    });
  }

  saveChanges(genreCreationDTO: genreCreationDTO)
  {

  }
}
