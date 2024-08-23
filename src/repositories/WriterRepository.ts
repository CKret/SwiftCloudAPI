import { WriterEntity } from "../models/WriterEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { IReadRepository } from "./interfaces/IReadRepository";
import { Equal } from "typeorm";

@Service()
export class WriterRepository implements IReadRepository<WriterEntity> {
    async findAll(): Promise<WriterEntity[]> { return SwiftCloudDataSource.manager.find(WriterEntity, { relations: { Songs: true } }); }
    async findById(id: number): Promise<WriterEntity> { return SwiftCloudDataSource.manager.findOne(WriterEntity, { where: { ID: id}, relations: { Songs: true } }); }
    async findByName(name: string): Promise<WriterEntity> { return SwiftCloudDataSource.manager.findOne(WriterEntity, { where: { Name: Equal(name) }, relations: { Songs: true } }); }
}
