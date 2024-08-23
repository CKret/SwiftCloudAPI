import { ArtistEntity } from "../models/ArtistEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { IReadRepository } from "./interfaces/IReadRepository";
import { Equal } from "typeorm";

@Service()
export class ArtistRepository implements IReadRepository<ArtistEntity> {
    async findAll(): Promise<ArtistEntity[]> { return SwiftCloudDataSource.manager.find(ArtistEntity, { relations: { Songs: true } }); }
    async findById(id: number): Promise<ArtistEntity> { return SwiftCloudDataSource.manager.findOne(ArtistEntity, { where: { ID: id }, relations: { Songs: true } }); }
    async findByName(name: string): Promise<ArtistEntity> { return SwiftCloudDataSource.manager.findOne(ArtistEntity, { where: { Name: Equal(name) }, relations: { Songs: true } }); }
}
