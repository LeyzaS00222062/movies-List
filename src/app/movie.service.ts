import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  movieList = [
    new Movie('The Handmaiden', '2016', 'Park Chan-Wook'),
    new Movie('Fear Street Part One: 1994', '2021', 'Leigh Janiak'),
    new Movie('Ponyo', '2008', 'Hayao Miyazaki'),
    new Movie('Scream', '1996', 'Wes Craven'),
  ];

  getMovies(){
    return this.movieList;
  };

  addMovie(movietitle:string, moviedirector:string, movieyear:string){
      this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  };
}
