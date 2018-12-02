import { Component, OnInit } from '@angular/core';
import { GetDeneme } from '../entities/getdeneme';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [GetdataService]
})
export class ContentComponent implements OnInit {

  constructor(private postService: GetdataService) { }
  getden: GetDeneme[];
  ngOnInit() {
    this.getPosts();
  }
  getPosts(): any {
    this.postService.getContents().subscribe(response => {
      this.getden = response;
    });
  }

}
