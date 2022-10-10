import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheatre =  [{
      Title: 'Spider Man',
      ReleaseDate: new Date,
      price: 124.00,
      poster: 'https://m.media-amazon.com/images/I/51C7O02ffOL._AC_.jpg'
    },
    {
      Title: 'Moana',
      ReleaseDate: new Date('2016-11-14'),
      price: 127.00,
      poster: 'https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg'
    }];

    this.moviesInUpcomming =  [];
    
  }

  moviesInTheatre: any;
  moviesInUpcomming: any;


}
