import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {title:'The Handmaiden', year:'2016', director:'Park Chan-Wook'},
    {title:'Fear Street Part One: 1994', year:'2021', director:'Leigh Janiak'},
    {title:'Ponyo', year:'2008', director:'Hayao Miyazaki'},
    {title:'Scream', year:'1996', director:'Wes Craven'},
  ];

  getMovies(){
    return this.movieList;
  };
  addMovie(movietitle:string, moviedirector:string, movieyear:string){
      this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  };
}
