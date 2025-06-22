import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CourseService} from '../services/course-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  //courses ;

  // Instead of the above, we can use the following
  // courses$: Observable<Course[]> = this.http.get<Course[]>('api/courses');
  Courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {

    // Current manual way of subscribing to an observable
    // this.http.get('api/courses', { params }).subscribe(courses => {
    //     this.courses = courses;
    // });

    // Instead of the above, we can use the following
    this.Courses$ = this.courseService.loadCourses();
  }



}
