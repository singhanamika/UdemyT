import {AuthorserviceService} from 'app/authorservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
	title = "List of Authors";
	author;
	imgUrl = "https://www.nyfa.edu/img/locations/nyc-things1.jpg";
	getTitle(){
		
		return this.title;
	}
	
ColSpan = 2;
isActive = true;


onClick($event){
	$event.stopPropagation();
	console.log("button was clicked",$event);
	
}
divClicked(){
	console.log("div was clicked");
	
}

KeyUp(){
	
	console.log("Enter");
}
keyup($event){
	
	console.log($event.target.value);
}

pressEnter(email){
	
	console.log(email);
}
phone = "jjjjjj";
Press(){
	console.log(this.phone);
	
}

// Pipe

Courses = {
	
	title: "The name",
	students: 30123,
	price: 190.95,
	releaseDate:  new Date (2010,3,1)
	
	
}

Story = "A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer proseA paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer proseA paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose";

  constructor(service:AuthorserviceService) { 
  
  this.author = service.getAuthor();
  }

  ngOnInit() {
  }

}
