import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  @Input()
  movies: any;

  remove(Index: number){
  
    this.movies.splice(Index, 1);

  }

}
