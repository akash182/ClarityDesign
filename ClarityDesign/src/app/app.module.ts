import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ToDoDetailComponent} from './to-do-detail/to-do-detail.component';
import { DetailsComponent} from './details/details.component';


const appRoutes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: 'home',
    pathMatch: 'full',
    component: ToDoDetailComponent
  },
  {
    path: '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ToDoDetailComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
