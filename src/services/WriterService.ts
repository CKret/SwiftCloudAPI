import { IBaseService } from "./interfaces/IBaseService";
import { WriterEntity } from "../models/WriterEntity";
import { Inject, Service } from "typedi";
import { IReadRepository } from "../repositories/interfaces/IReadRepository";
import { WriterRepository } from "../repositories/WriterRepository";

@Service()
export class WriterService implements IBaseService<WriterEntity> {
    constructor(@Inject(() => WriterRepository) private repository: IReadRepository<WriterEntity>) { }

    async findAll(): Promise<WriterEntity[]> { return this.repository.findAll(); }
    async findById(id: number, rel: boolean): Promise<WriterEntity> { return this.repository.findById(id); }
    async findByName(name: string): Promise<WriterEntity> { return this.repository.findByName(name); }
}
