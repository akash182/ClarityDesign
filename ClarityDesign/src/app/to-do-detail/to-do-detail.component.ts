import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {
 
  usercards: string[];
 
  // Inject HttpClient into your component or service.
  constructor(private http: Http, private router:Router) {}
 
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      // Read the result field from the JSON response.
      this.usercards = data.json();
    },
    err =>{

      console.log("Something went wrong while fetching data");
    });
  }

  redirect(id):void{
    console.log("clicked"+id);
    this.router.navigate(['/details/:'+id]);
  }
}
