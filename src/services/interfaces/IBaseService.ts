export interface IBaseService<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    findByName(name: string): Promise<T>;
};
