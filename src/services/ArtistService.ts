import { IBaseService } from "./interfaces/IBaseService";
import { ArtistEntity } from "../models/ArtistEntity";
import { Inject, Service } from "typedi";
import { ArtistRepository } from "../repositories/ArtistRepository";
import { IReadRepository } from "../repositories/interfaces/IReadRepository";

@Service()
export class ArtistService implements IBaseService<ArtistEntity> {
    constructor(@Inject(() => ArtistRepository) private repository: IReadRepository<ArtistEntity>) { }

    async findAll(): Promise<ArtistEntity[]> { return this.repository.findAll(); }
    async findById(id: number): Promise<ArtistEntity> { return this.repository.findById(id); }
    async findByName(name: string): Promise<ArtistEntity> { return this.repository.findByName(name); }
}
