import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  courses ;

  // Instead of the above, we can use the following
  // courses$: Observable<Course[]> = this.http.get<Course[]>('api/courses');
  Courses$: Observable<Course[]>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const params = new HttpParams()
      .set('page', '1')
      .set("pageSize", 5);

    // Current manual way of subscribing to an observable
    // this.http.get('api/courses', { params }).subscribe(courses => {
    //     this.courses = courses;
    // });

    // Instead of the above, we can use the following
    this.Courses$ = this.http.get<Course[]>('api/courses', { params });
  }



}
