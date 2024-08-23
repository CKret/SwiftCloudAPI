const express = require('express');
import { Request, Response } from "express"
import { WriterEntity } from "../models/WriterEntity"
import { WriterService } from "../services/WriterService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";

export const router = express.Router();

const service = Container.get(WriterService);

router.get('/writers', async (req : Request, res : Response) => {
    /* #swagger.tags = ['Writers'] */
    // #swagger.summary = 'Gets all writers'
    // #swagger.description = 'Gets all writers'
    return await QueryHelper.makeQuery<WriterEntity[]>(service.findAll(), res)
});
router.get('/writer/:id', async (req : Request, res : Response) => {
    /* #swagger.tags = ['Writers'] */
    // #swagger.summary = 'Gets writer by id'
    // #swagger.description = 'Gets an writers with the specified id'
    // #swagger.parameters['id'] = { description: 'The id to find' }
    return await QueryHelper.makeQuery<WriterEntity>(service.findById(+req.params.id, Boolean(req.params.rel)), res)
});
router.get('/writer/name/:name', async (req : Request, res : Response) => {
    /* #swagger.tags = ['Writers'] */
    // #swagger.summary = 'Gets writer by name'
    // #swagger.description = 'Gets an writers with the specified name'
    // #swagger.parameters['name'] = { description: 'The name to find' }
    return await QueryHelper.makeQuery<WriterEntity>(service.findByName(req.params.name), res)
});
