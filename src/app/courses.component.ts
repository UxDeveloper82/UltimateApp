import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
    <div class="container">
        <div class="col-lg-12">
          <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
          </div>
          <a class="btn btn-primary">Click Here</a>
    </div>
          <img src="{{ imageUrl }}" />` 
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://techanimate.com/wp-content/uploads/2018/01/Goku-Quotes-thumbnail-1024x576.jpg";
    courses;
   
    constructor( service: CoursesService){
         this.courses = service.getCourses();
    }
     
}