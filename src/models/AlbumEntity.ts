import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { SongEntity } from "./SongEntity";

export class Album {
    @Column()
    Name: String;

    @Column({ nullable: true })
    Edition: String;
}

@Entity({ name: 'Albums' })
export class AlbumEntity extends Album {
    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToMany(() => SongEntity, (song) => song.Albums) 
    @JoinTable({ 
        name: 'AlbumSong',
        joinColumn: {
            name: 'AlbumsID',
            referencedColumnName: 'ID'
        },
        inverseJoinColumn: {
            name: 'SongsID',
            referencedColumnName: 'ID'
        }
    })
    Songs: SongEntity[];
}
