import { Http } from '@angular/http'
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css']
})
export class HttpserviceComponent implements OnInit {
posts: any[];
@Input() howMany: number;
@Input() Menu: any[];
  constructor(private http:Http) { }
  doGET(){
  this.http.get('https://jsonplaceholder.typicode.com/posts')
         .subscribe(response =>{
			 
			 this.posts = response.json();
		 });
		 }

  ngOnInit() {
  }

}
