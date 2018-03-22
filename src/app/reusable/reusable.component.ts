import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {
	
review = { 
howMany:15


}
review1 = { 
how:12,
Men: ["hme", "News", "Contt", "abut"]

}

course1 = {course:	[
  { id: 11, name: 'Mr. Nice', age: 15, subject: 'Science' },
  { id: 12, name: 'Narco', age: 15, subject: 'Science'  },
  { id: 13, name: 'Bombasto', age: 15, subject: 'Science'  },
  { id: 14, name: 'Celeritas' , age: 15, subject: 'Science' },
  { id: 15, name: 'Magneta', age: 15, subject: 'Science'  },
  { id: 16, name: 'RubberMan', age: 15, subject: 'Science'  },
  { id: 17, name: 'Dynama', age: 15, subject: 'Science'  },
  { id: 18, name: 'Dr IQ', age: 15, subject: 'Science'  },
  { id: 19, name: 'Magma', age: 15, subject: 'Science'  },
  { id: 20, name: 'Tornado', age: 15, subject: 'Science'  }
]};
	

  constructor() { }

  ngOnInit() {
  }

}
