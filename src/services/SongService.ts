import { IBaseService } from "./interfaces/IBaseService";
import { SongEntity } from "../models/SongEntity";
import { Inject, Service } from "typedi";
import { SongRepository } from "../repositories/SongRepository";

@Service()
export class SongService implements IBaseService<SongEntity> {
    constructor(@Inject(() => SongRepository) private repository: SongRepository) { }

    async findAll(rel: boolean = false): Promise<SongEntity[]> { return this.repository.findAll(rel); }
    async findById(id: number, rel: boolean = false): Promise<SongEntity> { return this.repository.findById(id, rel); }
    async findByName(name: string, rel: boolean = false): Promise<SongEntity> { return this.repository.findByName(name, rel); }
    async findByYear(year: number, rel: boolean = false): Promise<SongEntity[]> { return this.repository.findByYear(year, rel); }
    async findPopularByYear(year: number, count: number = 10): Promise<SongEntity[]> { return this.repository.findPopularByYear(year, count); }
    async findPopularByMonth(month: number, year: number, limit: number = 10): Promise<SongEntity[]> { return this.repository.findPopularByMonth(month, year, limit); }
}
