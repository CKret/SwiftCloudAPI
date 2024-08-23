import { AlbumEntity } from "../models/AlbumEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { IAlbumRepository } from "./interfaces/IAlbumRepository";
import { Equal } from "typeorm";

@Service()
export class AlbumRepository implements IAlbumRepository<AlbumEntity> {
    async findAll(): Promise<AlbumEntity[]> { return SwiftCloudDataSource.manager.find(AlbumEntity, { relations: { Songs: true } }); }
    async findById(id: number): Promise<AlbumEntity> { return SwiftCloudDataSource.manager.findOne(AlbumEntity, { where: { ID: id }, relations: { Songs: true } }); }
    async findByName(name: string): Promise<AlbumEntity> { return SwiftCloudDataSource.manager.findOne(AlbumEntity, { where: { Name: Equal(name) }, relations: { Songs: true } }); }
    async findPopularAlbumsByYear(year: number): Promise<any[]> {
        return SwiftCloudDataSource.manager.query(
            `select t.*, a.Name, a.Edition from (
                select a.AlbumID AlbumID, SUM(p.Count) totalPlays from Songs s
                inner join AlbumSong a on a.SongID = s.ID
                inner join Plays p on p.SongID = s.ID
                where p.Year = ${year}
                group by a.AlbumID
            ) t
            inner join Albums a on a.ID = t.AlbumID
            order by totalPlays desc`);
    }
}
