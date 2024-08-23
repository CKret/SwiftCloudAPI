import { PlaysEntity } from "../models/PlaysEntity";
import { Inject, Service } from "typedi";
import { PlaysRepository } from "../repositories/PlaysRepository";

@Service()
export class PlaysService {
    constructor(@Inject(() => PlaysRepository) private repository: PlaysRepository) { }

    async findAll(): Promise<PlaysEntity[]> { return this.repository.findAll(); }
    async findMostPlayedByYear(year: number): Promise<PlaysEntity[]> { return this.repository.findMostPlayedByYear(year); }
}
