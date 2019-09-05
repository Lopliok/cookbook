import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @Column('date') 
    created_at:Date;

    @Column() 
    description:string;

    @Column() 
    likes:number;
}