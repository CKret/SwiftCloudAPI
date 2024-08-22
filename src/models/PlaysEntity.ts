import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SongEntity } from "./SongEntity";

export class Plays {
    @ManyToOne(() => SongEntity, (song) => song.Plays)
    Song: SongEntity;

    @Column()
    Month: number;

    @Column()
    Year: number;

    @Column()
    Count: number;
}

@Entity({ name: 'Plays' })
export class PlaysEntity extends Plays {
    @PrimaryGeneratedColumn()
    ID: number;
}
