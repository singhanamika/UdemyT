import { Injectable } from '@angular/core';

@Injectable()

export class AuthorserviceService {
	
	getAuthor(){
		
		return ["Anamika","Joe"];
	}

  constructor() { }

}
