import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Person, PersonEntity } from "./PersonModel"
import { SongEntity } from "./SongEntity";

export class Artist implements Person {
    @Column()
    Name: String;
}

@Entity({ name: 'Artists' })
export class ArtistEntity extends Artist implements PersonEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToMany(() => SongEntity, (song) => song.Artists)
    @JoinTable({ 
        name: 'ArtistSong',
        joinColumn: {
            name: 'ArtistID',
            referencedColumnName: 'ID'
        },
        inverseJoinColumn: {
            name: 'SongID',
            referencedColumnName: 'ID'
        }
    })
    Songs: SongEntity[];
}
