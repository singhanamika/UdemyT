import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyspipe'
})
export class KeyspipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return null;
	let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
