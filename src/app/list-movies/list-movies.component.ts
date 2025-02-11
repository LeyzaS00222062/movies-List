import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {

  movies:any[]=[];

  constructor(private movieservice:MovieService){}

  ngOnInit(){
    this.movies=this.movieservice.getMovies();
    console.log(this.movies);
  }

}
