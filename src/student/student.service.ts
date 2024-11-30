import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './create-student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) { }

    getStudents(){
        return this.studentRepository.find().then(students =>{
            if(students.length === 0){
                return {
                    message: 'No existen datos en la tabla.',
                    statusCode: 200,
                };
            }
            return students;
        })
    }
    //funcion para crear un nuevo dato
    createStudent(student: CreateStudentDto) {
        if (!student.nombres || !student.apellidos || !student.primerPago 
            || !student.segundoPago || !student.totalPago
        ) {
            throw new BadRequestException('Los campos son obligatorios.');
        }

        const newStudent = this.studentRepository.create(student);
        return this.studentRepository.save(newStudent);
    }
}
