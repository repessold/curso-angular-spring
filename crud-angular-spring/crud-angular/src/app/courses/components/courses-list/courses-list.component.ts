import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  // @Input() courses: Course[] = [
  //   { _id: '1', name: 'Angular', category:'front-end'}
  // ];
  // @Output() add = new EventEmitter(false);
  // @Output() edit = new EventEmitter(false);
  // @Output() remove = new EventEmitter(false);

  // readonly displayedColumns = ['name', 'category', 'actions'];

  courses:Observable<Course[]>;
  displayedColumns = ['name', 'category'];
  edit: any;
  remove: any;
  add: any;
  

  constructor(private coursesService:CoursesService) {
     this.courses= this.coursesService.list();
   }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    this.edit.emit(course);
  }

  onDelete(course: Course) {
    this.remove.emit(course);
  }

}
