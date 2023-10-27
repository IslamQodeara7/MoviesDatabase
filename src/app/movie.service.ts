import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  images:string='https://image.tmdb.org/t/p/w500';
  constructor(private UserService:UserService,private HttpClient:HttpClient) {

   }
   getTrending(keyword: string): Observable<any> {
    return this.HttpClient.get(`https://api.themoviedb.org/3/trending/${keyword}/day?api_key=8c6228e0f8193f959bb72650ee76dffb`)
}

getMovieDetails(keyword:string):Observable<any>{
return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${keyword}?api_key=8c6228e0f8193f959bb72650ee76dffb`)
}
getTVShowDetails(keyword:string):Observable<any>{
return this.HttpClient.get(`https://api.themoviedb.org/3/tv/${keyword}?api_key=8c6228e0f8193f959bb72650ee76dffb`)
}
getPersonDetails(keyword:string):Observable<any>{
return this.HttpClient.get(`https://api.themoviedb.org/3/person/${keyword}?api_key=8c6228e0f8193f959bb72650ee76dffb`)
}
getMoviesPagination(page:number):Observable<any>{
  return this.HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=8c6228e0f8193f959bb72650ee76dffb&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`)
}
getTVShowsPagination(page:number):Observable<any>{
  return this.HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=8c6228e0f8193f959bb72650ee76dffb&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`)
}
}