export interface IReadRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    findByName(name: string): Promise<T>;
};
