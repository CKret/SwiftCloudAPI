import { PersonEntity } from '../models/PersonModel';
import { WriterRepository } from '../repositories/WriterRepository';
import { WriterService } from '../services/WriterService';
import { MockWriterRepository } from './repositories/MockWriterRepository';
import {expect, jest, test} from '@jest/globals';

jest.mock('../repositories/WriterRepository', () => {
    return {
        WriterRepository: jest.fn().mockImplementation(() => {
            return {
                data: [{ ID: 0, Name: 'Test 0' }, { ID: 1, Name: 'Test 1' }, { ID: 2, Name: 'Test 2' }],
                async findAll(): Promise<PersonEntity[]> { return this.data },
                async findById(id: number): Promise<PersonEntity> { return this.data.find(x => x.ID === id); },
                async findByName(name: string): Promise<PersonEntity> { return this.data.find(x => x.Name === name); }
            }
        })
    };
});

describe('WriterService', () => {
    beforeAll(() => {
    });

    it('MockPersonRepository.findAll returns 3 users', async () => {
        const service = new WriterService(new MockWriterRepository());
        expect(await service.findAll()).toHaveLength(3);
    });

    it('AutoMockedWriterRepository.findAll returns 3 users', async () => {
        const service = new WriterService(new WriterRepository());
        expect(await service.findAll()).toHaveLength(3);
    });

    it('AutoMockedWriterRepository.findById returns 1 users', async () => {
        const service = new WriterService(new WriterRepository());
        expect(await service.findById(1)).toHaveProperty('ID', 1);
    });

    it('AutoMockedWriterRepository.findById returns 0 users', async () => {
        const service = new WriterService(new WriterRepository());
        expect(await service.findById(3)).toBeUndefined();
    });

    it('AutoMockedWriterRepository.findByName returns 1 users', async () => {
        const service = new WriterService(new WriterRepository());
        expect(await service.findByName('Test 1')).toHaveProperty('ID', 1);
    });

    it('AutoMockedWriterRepository.findById returns 0 users', async () => {
        const service = new WriterService(new WriterRepository());
        expect(await service.findByName('Taylor Swift')).toBeUndefined();
    });
});
