import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageLink:string = this.MovieService.images;
  movies: any = [];
  tvShows: any = [];
  people: any = [];
  moviesKeyword:string = '';
  tvshowsKeyword:string = '';
  personsKeyword:string = '';
  constructor(private MovieService: MovieService) {
    AOS.init();
    this.MovieService.getTrending("movie").subscribe((res) => {
      console.log(res);
      this.movies = res.results;
      
    });
    this.MovieService.getTrending("tv").subscribe((res) => {
      console.log(res);
      this.tvShows = res.results;
      
    });
    this.MovieService.getTrending("person").subscribe((res) => {
      console.log(res);
      this.people = res.results;
      
    });
  }
  
  ngOnInit(): void {
  }

}
