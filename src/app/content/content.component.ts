import { Component, OnInit } from '@angular/core';
import { GetDeneme } from '../entities/getdeneme';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  path = 'https://jsonplaceholder.typicode.com/photos';
  getden: GetDeneme[];
  ngOnInit() {
    this.http.get<GetDeneme[]>(this.path).subscribe(response => this.getden = response);
  }

}
