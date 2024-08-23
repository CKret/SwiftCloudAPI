export interface ISongRepository<T> {
    findAll(rel: boolean): Promise<T[]>;
    findById(id: number, rel: boolean): Promise<T>;
    findByName(name: string, rel: boolean): Promise<T>;
    findByYear(year: number, rel: boolean): Promise<T[]>;
    findPopularByYear(year: number, limit: number): Promise<T[]>;
    findPopularByMonth(year: number, month: number, limit: number): Promise<T[]>
};
