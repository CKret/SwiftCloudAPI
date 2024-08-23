const express = require('express');
import { Request, Response } from "express"
import { AlbumEntity } from "../models/AlbumEntity";
import { AlbumService } from "../services/AlbumService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";

export const router = express.Router();

const service = Container.get(AlbumService);

router.get('/albums', async (req : Request, res : Response) => {
    // #swagger.tags = ['Albums']
    // #swagger.summary = 'Gets all albums'
    // #swagger.description = 'Gets all albums'
    return await QueryHelper.makeQuery<AlbumEntity[]>(service.findAll(), res)
});

router.get('/albums/popular/:year', async (req : Request, res : Response) => {
    // #swagger.tags = ['Albums']
    // #swagger.parameters['limit'] = { in: 'query', type: 'number', description: 'Limit the result to # entities' }
    // #swagger.summary = 'Most listened albums for a given year'
    // #swagger.description = 'Gets the specified number of albums ordered by number of times listened to during the specified year, with or without relations'
    return await QueryHelper.makeQuery<AlbumEntity[]>(service.findPopularAlbumsByYear(+req.params.year), res);
});
