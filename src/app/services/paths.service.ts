import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathsService {
  path = 'https://jsonplaceholder.typicode.com/';
  pathUser = this.path + 'users';
  pathPost = this.path + 'posts';
  pathContent = this.path + 'photos';
  pathPostUserId = this.pathPost + '/?userId=';

  constructor() { }


}
