import { IBaseService } from "./interfaces/IBaseService";
import { SongEntity } from "../models/SongEntity";
import { Inject, Service } from "typedi";
import { SongRepository } from "../repositories/SongRepository";

@Service()
export class SongService implements IBaseService<SongEntity> {
    constructor(@Inject(() => SongRepository) private repository: SongRepository) { }

    async findAll(): Promise<SongEntity[]> { return this.repository.findAll(); }
    async findById(id: number): Promise<SongEntity> { return this.repository.findById(id); }
    async findByName(name: string): Promise<SongEntity> { return this.repository.findByName(name); }
    async findByYear(year: number): Promise<SongEntity[]> { return this.repository.findByYear(year); }
    async findByArtistName(name: string): Promise<SongEntity[]> { return this.repository.findByArtistName(name); }
    async findPopularByMonth(month: number, year: number, count: number = 10): Promise<SongEntity[]> { return this.repository.findPopularByMonth(month, year, count); }
}
