import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favcomponent',
  templateUrl: './favcomponent.component.html',
  styleUrls: ['./favcomponent.component.css']
})
export class FavcomponentComponent implements OnInit {

isChecked = true;

Color = [{
id: 1, name: "Red"},
{id: 2, name: "Blue"},
	{id: 3, name: "Green"},
	
	
	
]

onChange($event){
	console.log("changed");
	
}
  constructor() { }

  ngOnInit() {
  }

}
