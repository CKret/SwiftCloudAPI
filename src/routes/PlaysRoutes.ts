const express = require('express');
import { Request, Response } from "express"
import { PlaysService } from "../services/PlaysService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";
import { PlaysEntity } from "../models/PlaysEntity";

export const router = express.Router();

const service = Container.get(PlaysService);

router.get('/plays', async (req : Request, res : Response) => {
    // #swagger.tags = ['Plays']
    // #swagger.summary = 'Gets all plays'
    // #swagger.description = 'Gets all plays'
    return await QueryHelper.makeQuery<PlaysEntity[]>(service.findAll(), res)
});

router.get('/plays/popular/:year', async (req : Request, res : Response) => {
    // #swagger.tags = ['Plays']
    // #swagger.summary = 'Gets most popular songs'
    // #swagger.description = 'Gets most popular songs for the specified year'
    return await QueryHelper.makeQuery<PlaysEntity[]>(service.findMostPlayedByYear(+req.params.year), res);
});
