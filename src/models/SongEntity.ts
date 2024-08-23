import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { ArtistEntity } from "./ArtistEntity"
import { WriterEntity } from "./WriterEntity"
import { AlbumEntity } from "./AlbumEntity";
import { PlaysEntity } from "./PlaysEntity";

export class Song {
    @Column()
    Name: String;

    @Column()
    Year: number;
}

@Entity({ name: 'Songs' })
export class SongEntity extends Song {
    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToMany(() => AlbumEntity, (album) => album.Songs)
    Albums: AlbumEntity[];

    @ManyToMany(() => ArtistEntity, (artist) => artist.Songs)
    Artists: ArtistEntity[];

    @ManyToMany(() => WriterEntity, (writer) => writer.Songs)
    @JoinTable({ 
        name: 'SongWriter',
        joinColumn: {
            name: 'SongID',
            referencedColumnName: 'ID'
        },
        inverseJoinColumn: {
            name: 'WriterID',
            referencedColumnName: 'ID'
        }
    })
    Writers: WriterEntity[];

    @OneToMany(() => PlaysEntity, (plays) => plays.Song)
    Plays: PlaysEntity[]
}

