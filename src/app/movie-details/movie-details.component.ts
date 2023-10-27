import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  imageLink:string = this.MovieService.images;
  movieID: string = '';
  obj: any = {};
  constructor(private ActivatedRoute: ActivatedRoute, private MovieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieID = this.ActivatedRoute.snapshot.params['x'];
    this.MovieService.getMovieDetails(this.movieID).subscribe((res) => {
      this.obj = res;
      console.log(res);
      
    })
  }

}
