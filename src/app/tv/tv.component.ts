import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvShowList: any = [];
  pageNumber: number = 1;
  imageLink: string = this.MovieService.images;
  tvshowsKeyword:string = '';
  nextPage() {
    if (this.pageNumber == 25) {
      this.pageNumber = 1;
    }
    else {
      this.pageNumber++;
    }
    this.MovieService.getTVShowsPagination(this.pageNumber).subscribe((res)=>{
      this.tvShowList = res.results;
    })
  }
  previousPage() {
    if (this.pageNumber == 1) {
      this.pageNumber = 25;
    }
    else {
      this.pageNumber--;
    }
    this.MovieService.getTVShowsPagination(this.pageNumber).subscribe((res)=>{
      this.tvShowList = res.results;
    })
  }
 
  constructor(private MovieService: MovieService) { 
    this.MovieService.getTVShowsPagination(1).subscribe((res)=>{
      this.tvShowList = res.results;
      console.log(res);
      AOS.init();
    })
  }

  ngOnInit(): void {
  }

}
