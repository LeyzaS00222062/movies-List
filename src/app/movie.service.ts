import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {id:1,title:'The Handmaiden', year:'2016', director:'Park Chan-Wook'},
    {id:2,title:'Fear Street Part One: 1994', year:'2021', director:'Leigh Janiak'},
    {id:3,title:'Ponyo', year:'2008', director:'Hayao Miyazaki'},
    {id:4,title:'Scream', year:'1996', director:'Wes Craven'},
  ];

  getMovies(){
    return this.movieList
  }
}
