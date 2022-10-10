import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-movie-theatre',
  templateUrl: './edit-movie-theatre.component.html',
  styleUrls: ['./edit-movie-theatre.component.css']
})
export class EditMovieTheatreComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      //alert(params['id']);
    });
  }

}
