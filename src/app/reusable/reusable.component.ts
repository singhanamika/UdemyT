import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {
	
review = { 
howMany:15
Menu: ["home", "News", "Contact", "about"]

}

	
	

  constructor() { }

  ngOnInit() {
  }

}
