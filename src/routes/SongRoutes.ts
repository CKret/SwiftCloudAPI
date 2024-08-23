const express = require('express');
import { Request, Response } from "express"
import { SongEntity } from "../models/SongEntity";
import { SongService } from "../services/SongService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";

export const router = express.Router();

const service = Container.get(SongService);

router.get('/songs', async (req : Request, res : Response) => {
    // #swagger.tags = ['Songs']
    // #swagger.parameters['rel'] = { in: 'query', type: 'boolean', description: 'Get relational data' }
    // #swagger.summary = 'Gets all songs'
    // #swagger.description = 'Gets all songs with or without relations'
    return await QueryHelper.makeQuery<SongEntity[]>(service.findAll(req.query.rel === 'true'), res)
});

router.get('/song/:id', async (req : Request, res : Response) => {
    // #swagger.tags = ['Songs']
    // #swagger.parameters['rel'] = { in: 'query', type: 'boolean', description: 'Get relational data' }
    // #swagger.summary = 'Gets song by id'
    // #swagger.description = 'Finds a song with the specified id, with or without relations'
    return await QueryHelper.makeQuery<SongEntity>(service.findById(+req.params.id, req.query.rel === 'true'), res)
});

router.get('/song/name/:name', async (req : Request, res : Response) => {
    // #swagger.tags = ['Songs']
    // #swagger.parameters['rel'] = { in: 'query', type: 'boolean', description: 'Get relational data' }
    // #swagger.summary = 'Gets song by name'
    // #swagger.description = 'Finds a song with the specified name, with or without relations'
    return await QueryHelper.makeQuery<SongEntity>(service.findByName(req.params.name, req.query.rel === 'true'), res)
});

router.get('/songs/year/:year', async (req : Request, res : Response) => {
    // #swagger.tags = ['Songs']
    // #swagger.parameters['rel'] = { in: 'query', type: 'boolean', description: 'Get relational data' }
    // #swagger.summary = 'All songs for the specified year'
    // #swagger.description = 'Gets all songs for the specified year, with or without relations'
    return await QueryHelper.makeQuery<SongEntity[]>(service.findByYear(+req.params.year, req.query.rel === 'true'), res)
});

router.get('/songs/popular/:year', async (req : Request, res : Response) => {
    // #swagger.tags = ['Songs']
    // #swagger.parameters['limit'] = { in: 'query', type: 'number', description: 'Limit the result to # entities' }
    // #swagger.summary = 'Most listened songs for a given year'
    // #swagger.description = 'Gets the specified number of songs ordered by number of times listened to during the specified year, with or without relations'
    return await QueryHelper.makeQuery<SongEntity[]>(service.findPopularByYear(+req.params.year, +req.query.limit), res)
});

router.get('/songs/popular/:year/:month', async (req : Request, res : Response) => {
    // #swagger.tags = ['Songs']
    // #swagger.parameters['limit'] = { in: 'query', type: 'number', description: 'Limit the result to # entities' }
    // #swagger.summary = 'Most listened songs for a given year and month'
    // #swagger.description = 'Gets the specified number of songs ordered by number of times listened to during the specified year and month, with or without relations'
    return await QueryHelper.makeQuery<SongEntity[]>(service.findPopularByMonth(+req.params.year, +req.params.month, +req.query.limit), res)
});
