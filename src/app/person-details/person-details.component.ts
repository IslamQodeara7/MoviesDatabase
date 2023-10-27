import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  imageLink:string = this.MovieService.images;
  personID: string = '';
  obj: any = {};
  constructor(private ActivatedRoute:ActivatedRoute,private MovieService:MovieService) { }

  ngOnInit(): void {
    this.personID = this.ActivatedRoute.snapshot.params['x'];
    this.MovieService.getPersonDetails(this.personID).subscribe((res) => {
      this.obj = res;
      console.log(res);
      
    })
  }

}
