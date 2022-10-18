import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form: FormBuilder | any;

 genres = [{id: 1, name: 'Drama'}, {id:2, name: 'Comedy'}];

 movies = [{title: 'Spider-man', poster:'https://m.media-amazon.com/images/I/51C7O02ffOL._AC_.jpg'},
          {title: 'Moana', poster:'https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg'},
          {title: 'Inception', poster:'https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg'}]
  
  
  orginalMvoies = this.movies;

          ngOnInit(): void {
    this.form = this.FormBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges
       .subscribe((values: any) => {
        this.movies = this.orginalMvoies;
        this.filterMovies(values);
      });
  }

  filterMovies(values:any)
  {
    if (values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1)
    }
  }

  clearForm(){
    this.form.reset();
  }

}
