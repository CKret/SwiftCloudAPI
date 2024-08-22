import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { SongEntity } from "./SongEntity";
import { WriterEntity } from "./WriterEntity";

@Entity({ name: 'SongWriter'})
export class SongWriterEntity {
    @PrimaryColumn()
    SongsID: number;

    @PrimaryColumn()
    WritersID: number;

    @ManyToOne(() => SongEntity, (song) => song.Writers)
    @JoinColumn([{name: 'SongsID', referencedColumnName: 'ID'}])
    Writers: SongEntity[]

    @ManyToOne(() => WriterEntity, (song) => song.Songs)
    @JoinColumn([{name: 'WritersID', referencedColumnName: 'ID'}])
    Songs: WriterEntity[]
}