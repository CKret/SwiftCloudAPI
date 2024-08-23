import { SongEntity } from "../models/SongEntity";
import { PlaysEntity } from "../models/PlaysEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { ISongRepository } from "./interfaces/ISongRepository";
import { Equal } from "typeorm";

@Service()
export class SongRepository implements ISongRepository<SongEntity> {
    async findAll(rel: boolean = false): Promise<SongEntity[]> { return SwiftCloudDataSource.manager.find(SongEntity, { relations: { Artists: rel, Writers: rel, Albums: rel, Plays: rel } }); }
    async findById(id: number, rel: boolean = false): Promise<SongEntity> { return SwiftCloudDataSource.manager.findOne(SongEntity, { where: { ID: id }, relations: { Artists: rel, Writers: rel, Albums: rel, Plays: rel } }); }
    async findByName(name: string, rel: boolean = false): Promise<SongEntity> { return SwiftCloudDataSource.manager.findOne(SongEntity, { where: { Name: Equal(name) }, relations: { Artists: rel, Writers: rel, Albums: rel, Plays: rel } } ); }
    async findByYear(year: number, rel: boolean = false): Promise<SongEntity[]> { return SwiftCloudDataSource.manager.find(SongEntity, { where: { Year: year }, relations: { Artists: rel, Writers: rel, Albums: rel, Plays: rel } } ); }
    async findPopularByYear(year: number, limit: number = 10): Promise<SongEntity[]> {
        return SwiftCloudDataSource.getRepository(PlaysEntity).createQueryBuilder("plays")
            .where("plays.Year = :year", { year })
            .select('plays.songID', 'ID')
            .addSelect('SUM(plays.Count)', 'totalPlays')
            .innerJoin(SongEntity, "song", "plays.songID = song.ID")
            .addSelect('song.Name', "Name")
            .groupBy('plays.songID, song.Name')
            .orderBy('totalPlays', 'DESC')
            .limit(limit)
            .getRawMany();
    }
    async findPopularByMonth(year: number, month: number, limit: number = 10): Promise<SongEntity[]> {
        return SwiftCloudDataSource.manager.find(SongEntity, {
            relations: { Plays: true },
            where: { Plays: { Year: year, Month: month} },
            order: { Plays: { Count: 'DESC'}},
            take: limit
        });
    }
}
