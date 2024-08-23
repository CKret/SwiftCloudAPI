import { PlaysEntity } from "../models/PlaysEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";

@Service()
export class PlaysRepository {
    async findAll(): Promise<PlaysEntity[]> { return SwiftCloudDataSource.manager.find(PlaysEntity, { relations: { Song: true } }); }
    async findMostPlayedByYear(year: number): Promise<PlaysEntity[]> {
        return SwiftCloudDataSource.manager.find(PlaysEntity, {
            relations: { Song: true},
            where: { Year: year},
            order: { Count: 'DESC' }
        })
    };
    // async findPopularAlbumsByYear(year: number): Promise<any[]> {
    //     return SwiftCloudDataSource.manager.query(
    //         `select t.*, a.Name, a.Edition from (
    //             select a.AlbumID AlbumID, SUM(p.Count) totalPlays from Songs s
    //             inner join AlbumSong a on a.SongID = s.ID
    //             inner join Plays p on p.SongID = s.ID
    //             where p.Year = ${year}
    //             group by a.AlbumID
    //         ) t
    //         inner join Albums a on a.ID = t.AlbumID
    //         order by totalPlays desc`);
    // }
}
