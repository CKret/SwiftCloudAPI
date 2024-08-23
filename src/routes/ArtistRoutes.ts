const express = require('express');
import { Request, Response } from "express"
import { ArtistEntity } from "../models/ArtistEntity"
import { ArtistService } from "../services/ArtistService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";

export const router = express.Router();

const service = Container.get(ArtistService);

router.get('/artists', async (req : Request, res : Response) => {
    // #swagger.tags = ['Artists']
    // #swagger.summary = 'Gets all artists'
    // #swagger.description = 'Gets all artists'
    return await QueryHelper.makeQuery<ArtistEntity[]>(service.findAll(), res)
});
router.get('/artist/:id', async (req : Request, res : Response) => {
    // #swagger.tags = ['Artists']
    // #swagger.summary = 'Gets artist by id'
    // #swagger.description = 'Gets an artists with the specified id'
    // #swagger.parameters['id'] = { description: 'The id to find' }
    return await QueryHelper.makeQuery<ArtistEntity>(service.findById(+req.params.id), res)
});
router.get('/artist/name/:name', async (req : Request, res : Response) => {
    // #swagger.tags = ['Artists']
    // #swagger.summary = 'Gets artist by name'
    // #swagger.description = 'Gets an artists with the specified name'
    // #swagger.parameters['name'] = { description: 'The name to find' }
    return await QueryHelper.makeQuery<ArtistEntity>(service.findByName(req.params.name), res)
});
