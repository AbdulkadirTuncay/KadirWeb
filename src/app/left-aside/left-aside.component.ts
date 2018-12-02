import { Component, OnInit } from '@angular/core';
import { GetUsers } from '../entities/getUsers';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss'],
  providers: [GetdataService]
})

export class LeftAsideComponent implements OnInit {

  constructor(private postService: GetdataService) { }
  users: GetUsers[];
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): any {
    this.postService.getUsers().subscribe(response => {
      this.users = response;
    });
  }
}
