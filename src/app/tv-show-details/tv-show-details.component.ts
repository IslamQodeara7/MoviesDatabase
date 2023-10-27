import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {
  imageLink:string = this.MovieService.images;
  tvshowID: string = '';
  obj: any = {};
  constructor(private MovieService:MovieService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.tvshowID = this.ActivatedRoute.snapshot.params['x'];
    this.MovieService.getTVShowDetails(this.tvshowID).subscribe((res) => {
      this.obj = res;
      console.log(res);
      
    })
  }

}
