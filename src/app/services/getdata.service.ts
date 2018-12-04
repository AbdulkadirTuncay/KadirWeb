import { Injectable } from '@angular/core';
import { GetPosts } from '../entities/getPosts';
import { GetUsers } from '../entities/getUsers';
import { HttpClient } from '@angular/common/http';
import { GetDeneme } from '../entities/getdeneme';
import { PathsService } from './paths.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient, private constsPath: PathsService) {
    console.log(this.constsPath.pathPost);
    console.log(this.constsPath.pathContent);
    console.log(this.constsPath.pathUser);
    console.log(this.constsPath.pathPostUserId);
  }


  getPosts(userid): Observable<GetPosts[]> {
    if (userid) {
      const link: string = this.constsPath.pathPostUserId + userid;
      debugger;

     return this.http.get<GetPosts[]>(link);

    } else {
      return this.http.get<GetPosts[]>(this.constsPath.pathPost);
    }
  }
  getUsers(): Observable<GetUsers[]> {
    return this.http.get<GetUsers[]>(this.constsPath.pathUser);

  }
  getContents(): Observable<GetDeneme[]> {
    return this.http.get<GetDeneme[]>(this.constsPath.pathContent);
  }

  getProducts(seoUrl: string): Observable<GetDeneme[]> {

    if (seoUrl) {
      return this.http.get<GetDeneme[]>(this.constsPath.path + '/photos/' + seoUrl);
    } else {
      return this.http.get<GetDeneme[]>(this.constsPath.path + '/photos');
    }

  }
}
