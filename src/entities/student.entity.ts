import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'student'})
export class Student{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nombres:string
    
    @Column()
    apellidos: string

    @Column({type: 'float'})
    primerPago: number

    @Column({type: 'float'})
    segundoPago: number

    @Column({type: 'float'})
    totalPago: number

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date
}