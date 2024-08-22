import { WriterEntity } from "../models/WriterEntity";
import { Service } from "typedi";
import { SwiftCloudDataSource } from "../../config/dbConfig";
import { IReadRepository } from "./interfaces/IReadRepository";
import { Equal } from "typeorm";

@Service()
export class WriterRepository implements IReadRepository<WriterEntity> {
    async findAll(): Promise<WriterEntity[]> {
        return await SwiftCloudDataSource.manager.find(WriterEntity);
    }

    async findById(id: number): Promise<WriterEntity> {
        return await SwiftCloudDataSource.manager.findOneBy(WriterEntity, { ID: id});
    }

    async findByName(name: string): Promise<WriterEntity> {
        return await SwiftCloudDataSource.manager.findOneBy(WriterEntity, { Name: Equal(name) });
    }
}
