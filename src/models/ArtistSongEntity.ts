import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ArtistEntity } from "./ArtistEntity";
import { SongEntity } from "./SongEntity";

@Entity({ name: 'ArtistSong'})
export class ArtistSongEntity {
    @PrimaryColumn()
    ArtistsID: number;

    @PrimaryColumn()
    SongsID: number;

    @ManyToOne(() => ArtistEntity, (song) => song.Songs)
    @JoinColumn([{name: 'ArtistsID', referencedColumnName: 'ID'}])
    Songs: ArtistEntity[]

    @ManyToOne(() => SongEntity, (song) => song.Artists)
    @JoinColumn([{name: 'SongID', referencedColumnName: 'ID'}])
    Artists: SongEntity[]
}