import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Person, PersonEntity } from "./PersonModel"
import { SongEntity } from "./SongEntity"

export class Writer implements Person {
    @Column()
    Name: String;
}

@Entity({ name: 'Writers' })
export class WriterEntity extends Writer implements PersonEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToMany(() => SongEntity, (song) => song.Writers)
    Songs: SongEntity[];
}
