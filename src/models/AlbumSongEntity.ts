import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AlbumEntity } from "./AlbumEntity";
import { SongEntity } from "./SongEntity";

@Entity({ name: 'AlbumSong'})
export class AlbumSongEntity {
    @PrimaryColumn()
    AlbumsID: number;

    @PrimaryColumn()
    SongsID: number;

    @ManyToOne(() => AlbumEntity, (song) => song.Songs)
    @JoinColumn([{name: 'AlbumsID', referencedColumnName: 'ID'}])
    Songs: AlbumEntity[]

    @ManyToOne(() => SongEntity, (song) => song.Artists)
    @JoinColumn([{name: 'SongID', referencedColumnName: 'ID'}])
    Artists: SongEntity[]
}