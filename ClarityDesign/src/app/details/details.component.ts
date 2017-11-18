import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 id: string;
 numid:number=100;
  private sub: any;
  todolist: any[];
  taskDetail:string[];
task:{}={}; 
 showItem:boolean[]=[];
  // Inject HttpClient into your component or service.
  constructor(private http: Http, private router:Router,private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
    // Make the HTTP request:
    this.http.get('https://jsonplaceholder.typicode.com/todos?userid='+this.id).subscribe(data => {
      // Read the result field from the JSON response.
      this.todolist = data.json();
for(let i=0;i<this.todolist.length;i++){
  this.showItem[i]=true;
}
    },
    err =>{

      console.log("Something went wrong while fetching data");
    });
  }
ngOnDestroy() {
    this.sub.unsubscribe();
  }

  hide(id):void{
    this.showItem[id]=false;
    this.todolist.slice(id-1,1)
  }
  addtask():void{
    this.task={id : ++this.numid,  title: this.taskDetail, completed: false};
    this.todolist.push(this.task);
  }
  savelist():void{
    this.http.post('https://jsonplaceholder.typicode.com/todos/',this.todolist).toPromise()
           .then(function(){console.log("Saved");})
           .catch(function(){console.log("Error");});
  }
}
