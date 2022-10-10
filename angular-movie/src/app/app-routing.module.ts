import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditMovieTheatreComponent } from './movie-theatres/edit-movie-theatre/edit-movie-theatre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { IndexMovieTheatresComponent } from './movie-theatres/index-movie-theatres/index-movie-theatres.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenresComponent } from 'src/app/genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},
  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorsComponent},
  {path: 'movietheatres', component: IndexMovieTheatresComponent},
  {path: 'movietheatres/create', component: CreateMovieComponent},
  {path: 'movietheatres/edit/:id', component: EditMovieTheatreComponent},
  {path: 'movies/create', component:CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
