import { SongEntity } from "../models/SongEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { IReadRepository } from "./interfaces/IReadRepository";
import { Equal } from "typeorm";

@Service()
export class SongRepository implements IReadRepository<SongEntity> {
    async findAll(): Promise<SongEntity[]> {
        return SwiftCloudDataSource.manager.find(SongEntity);
    }

    async findById(id: number): Promise<SongEntity> {
        return await SwiftCloudDataSource.manager.findOneBy(SongEntity, { ID: id});
    }

    async findByName(name: string): Promise<SongEntity> {
        return await SwiftCloudDataSource.manager.findOneBy(SongEntity, { Name: Equal(name) });
    }

    async findByYear(year: number): Promise<SongEntity[]> {
        return await SwiftCloudDataSource.manager.findBy(SongEntity, { Year: year});
    }

    async findByArtistName(name: string): Promise<SongEntity[]> {
        return await SwiftCloudDataSource.manager.find(SongEntity, { where: { Artists: { Name: Equal(name) } } });
    }

    async findPopularByMonth(year: number, month: number, count: number = 10): Promise<SongEntity[]> {
        return await SwiftCloudDataSource.manager.find(SongEntity, {
            relations: { Plays: true },
            where: { Plays: { Year: year, Month: month} },
            order: { Plays: { Count: 'DESC'}},
            take: count
        });
    }
}
