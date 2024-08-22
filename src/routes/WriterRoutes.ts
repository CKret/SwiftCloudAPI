const express = require('express');
import { Request, Response } from "express"
import { WriterEntity } from "../models/WriterEntity"
import { WriterService } from "../services/WriterService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";

export const router = express.Router();

const service = Container.get(WriterService);

router.get('/writers', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<WriterEntity[]>(service.findAll(), res) });
router.get('/writer/:id', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<WriterEntity>(service.findById(+req.params.id), res) });
router.get('/writer/name/:name', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<WriterEntity>(service.findByName(req.params.name), res) });
