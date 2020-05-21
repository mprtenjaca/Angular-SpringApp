import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html'
})
export class StudentEditComponent implements OnInit {

  student: Student;
  students: Student[];
  jmbag: string;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.getProps();
    this.getStudents();
  }

  getStudents(): void {
    this.studentService
      .getStudents()
      .subscribe((students) => {
        this.students = students;
        console.log(students);
      });
  }

  getProps(): void {
    this.route.paramMap
      .subscribe(params => {
        this.jmbag = params.get('jmbag');
      });
  }

}
