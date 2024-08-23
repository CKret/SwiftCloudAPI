import { IBaseService } from "./interfaces/IBaseService";
import { AlbumEntity } from "../models/AlbumEntity";
import { Inject, Service } from "typedi";
import { IAlbumRepository } from "../repositories/interfaces/IAlbumRepository";
import { AlbumRepository } from "../repositories/AlbumRepository";

@Service()
export class AlbumService implements IBaseService<AlbumEntity> {
    constructor(@Inject(() => AlbumRepository) private repository: IAlbumRepository<AlbumEntity>) { }

    async findAll(): Promise<AlbumEntity[]> { return this.repository.findAll(); }
    async findById(id: number): Promise<AlbumEntity> { return this.repository.findById(id); }
    async findByName(name: string): Promise<AlbumEntity> { return this.repository.findByName(name); }
    async findPopularAlbumsByYear(year: number): Promise<AlbumEntity[]> { return this.repository.findPopularAlbumsByYear(year) }
}
