import { Component, OnInit } from '@angular/core';
import { GetDeneme } from '../entities/getdeneme';
import { Pager } from '../entities/app-pager';
import { GetdataService } from '../services/getdata.service';
import { take , map} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [GetdataService]
})
export class ContentComponent implements OnInit {

  constructor(private postService: GetdataService) { }
  getden: GetDeneme[];
  pager: Pager = new Pager();
  addedProduct: string;

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): any {
    debugger;
    this.postService.getContents().pipe(take(100)).subscribe(res => {
      this.getden = res;
    });
  }

  getProducts(seoUrl: string) {
    this.postService.getProducts(seoUrl).subscribe(p => {
      this.getden = p;
      this.pager = this.getPager(p.length);
    }
    );
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 3): Pager {
    const totalPages = Math.ceil(totalItems / pageSize);

    const pages: Array<number> = [];
    for ( let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    const pager = new Pager ();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }

  setPage(page: number) {
    this.pager.currentPage = page;
  }

}
