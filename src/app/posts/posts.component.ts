import { Component, OnInit } from '@angular/core';
import { GetUsers } from '../entities/getUsers';
import { GetPosts } from '../entities/getPosts';
import { AlertifyService } from '../services/alertify.service';
import { GetdataService } from '../services/getdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [GetdataService]
})

export class PostsComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private activatedRoute: ActivatedRoute ,
    private postService: GetdataService) { }
  posts: GetPosts[];
  users: GetUsers[];
  filterText: string;
  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params['userid']);
    });
  }
  getPosts(userid): any {
    this.postService.getPosts(userid).subscribe(response => {
      this.posts = response;
    });
  }
  getUsers(): any {
    this.postService.getUsers().subscribe(response => {
      this.users = response;
    });
  }

  addToFavorites(user) {
    this.alertifyService.error(user.username);
    this.alertifyService.success(user);
    this.alertifyService.warning(user);
  }
}
