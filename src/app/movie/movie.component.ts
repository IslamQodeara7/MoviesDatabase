import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  moviesList: any = [];
  pageNumber: number = 1;
  imageLink: string = this.MovieService.images;
  moviesKeyword:string = '';
  nextPage() {
    if (this.pageNumber == 25) {
      this.pageNumber = 1;
    }
    else {
      this.pageNumber++;
    }
    this.MovieService.getMoviesPagination(this.pageNumber).subscribe((res)=>{
      this.moviesList = res.results;
    })
  }
  previousPage() {
    if (this.pageNumber == 1) {
      this.pageNumber = 25;
    }
    else {
      this.pageNumber--;
    }
    this.MovieService.getMoviesPagination(this.pageNumber).subscribe((res)=>{
      this.moviesList = res.results;
    })
  }
  
  constructor(private MovieService: MovieService) { 
    AOS.init();
    this.MovieService.getMoviesPagination(1).subscribe((res)=>{
      this.moviesList = res.results;
      console.log(res);
      
    })
  }

  ngOnInit(): void {
 
  }

}
