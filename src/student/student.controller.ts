import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentDto } from './create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(
        private studentService : StudentService
    ){}

    @Get()
    getStudents(){
        return this.studentService.getStudents();
    }

    @Post()
    createStudent(@Body() newStudent: CreateStudentDto){
        return this.studentService.createStudent(newStudent);
    }
}
