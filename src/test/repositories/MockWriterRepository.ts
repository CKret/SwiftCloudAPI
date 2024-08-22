import { Service } from "typedi";
import { IReadRepository } from "../../repositories/interfaces/IReadRepository";
import { WriterEntity } from "../../models/WriterEntity";

@Service()
export class MockWriterRepository implements IReadRepository<WriterEntity> {
    private data = [{ ID: 0, Name: 'Test 0', Songs: [] }, { ID: 1, Name: 'Test 1', Songs: [] }, { ID: 2, Name: 'Test 2', Songs: [] }];
    
    async findAll(): Promise<WriterEntity[]> { return this.data; }
    async findById(id: number): Promise<WriterEntity> { return this.data.find(x => x.ID === id); }
    async findByName(name: string): Promise<WriterEntity> { return this.data.find(x => x.Name === name); }
}
