import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casing'
})
export class CasingPipe implements PipeTransform {

  transform(value: string, args?: any): any {
	  if(!value) return null;
	  let preposition = ['the' , 'of'];
	  let words = value.split(' ');
	  
    
for(var i = 0; i < words.length; i++){
	if(i>0 && preposition.includes(words[i].toLowerCase())){
		words[i] = words[i].toLowerCase();
		
	}
	
	words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
}

   return words.join(" ");
  }

}
