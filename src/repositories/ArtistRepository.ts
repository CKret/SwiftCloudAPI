import { ArtistEntity } from "../models/ArtistEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { IReadRepository } from "./interfaces/IReadRepository";
import { Equal } from "typeorm";

@Service()
export class ArtistRepository implements IReadRepository<ArtistEntity> {
    async findAll(): Promise<ArtistEntity[]> {
        return SwiftCloudDataSource.manager.find(ArtistEntity);
    }

    async findById(id: number): Promise<ArtistEntity> {
        return await SwiftCloudDataSource.manager.findOneBy(ArtistEntity, { ID: id});
    }

    async findByName(name: string): Promise<ArtistEntity> {
        return await SwiftCloudDataSource.manager.findOneBy(ArtistEntity, { Name: Equal(name) });
    }
}
