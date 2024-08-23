export interface IBaseService<T> {
    findAll(): Promise<T[]>;
    findById(id: number, rel: boolean): Promise<T>;
    findByName(name: string): Promise<T>;
};
