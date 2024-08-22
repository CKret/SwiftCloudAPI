const express = require('express');
import { Request, Response } from "express"
import { SongEntity } from "../models/SongEntity";
import { SongService } from "../services/SongService";
import { Container } from "typedi";
import { QueryHelper } from "../helpers/QueryHelper";

export const router = express.Router();

const service = Container.get(SongService);

router.get('/songs', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity[]>(service.findAll(), res) });
router.get('/song/:id', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity>(service.findById(+req.params.id), res) });
router.get('/song/name/:name', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity>(service.findByName(req.params.name), res) });
router.get('/songs/year/:year', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity[]>(service.findByYear(+req.params.year), res) });
router.get('/songs/artist/:name', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity[]>(service.findByArtistName(req.params.name), res) });
router.get('/songs/popular/:year/:month', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity[]>(service.findPopularByMonth(+req.params.year, +req.params.month), res) });
router.get('/songs/popular/:year/:month/:count', async (req : Request, res : Response) => { return await QueryHelper.makeQuery<SongEntity[]>(service.findPopularByMonth(+req.params.year, +req.params.month, +req.params.count), res) });
