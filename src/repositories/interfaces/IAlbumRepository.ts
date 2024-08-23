import { IReadRepository } from "./IReadRepository";

export interface IAlbumRepository<T> extends IReadRepository<T>{
    findPopularAlbumsByYear(year: number): Promise<T[]>
};
