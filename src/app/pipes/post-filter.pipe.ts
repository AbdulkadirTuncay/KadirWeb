import { Pipe, PipeTransform } from '@angular/core';
import {GetPosts} from '../entities/getPosts';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(value: GetPosts[], filterTesxt: string): GetPosts[] {
    if (!filterTesxt) {
      return value;
    } else {
      return value.filter(p => p.title.toLocaleLowerCase().indexOf(filterTesxt.toLocaleLowerCase()) !== -1);
    }

  }
}
