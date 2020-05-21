import { Component, OnInit, Input } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Student} from '../student.model';
import {StudentService} from '../student.service';
import {CourseService} from '../../course/course.service';
import {Course} from '../../course/course.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
  students: Student[];
  courses: Course[];
  jmbag: string;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.getStudents();
    this.getProps();
    this.getCourses();
  }

  getStudents(): void {
    this.studentService
      .getStudents()
      .subscribe((students) => {
        this.students = students;
        console.log(students);
      });
  }

  getCourses(): void {
    this.courseService.getCoursesByJmbag(this.jmbag).subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });
  }

  getStudent(): void{
    this.studentService.getStudent(this.jmbag).subscribe(student => {
      this.student = student;
      console.log(student);
    });
  }

  getProps(): void {
    this.route.paramMap
      .subscribe(params => {
        this.jmbag = params.get('jmbag');
      });
  }
}
