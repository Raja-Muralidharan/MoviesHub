import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheatresComponent } from './movie-theatres/index-movie-theatres/index-movie-theatres.component';
import { CreateMovieTheatreComponent } from './movie-theatres/create-movie-theatre/create-movie-theatre.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheatreComponent } from './movie-theatres/edit-movie-theatre/edit-movie-theatre.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexMovieTheatresComponent,
    CreateMovieTheatreComponent,
    CreateMovieComponent,
    EditActorsComponent,
    EditGenreComponent,
    EditMovieTheatreComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }