import "reflect-metadata";

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { router as songRouter } from './routes/SongRoutes';
import { router as albumRouter } from './routes/AlbumRoutes';
import { router as playsRouter } from './routes/PlaysRoutes';
import { router as artistRouter } from './routes/ArtistRoutes';
import { router as writerRouter } from './routes/WriterRoutes';

dotevnv.config()

let PORT = 3000;
if (!process.env.PORT) {
    console.log('No port value specified...');
}
else {
    PORT = Number(process.env.PORT);
}

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api', songRouter);
app.use('/api', albumRouter);
app.use('/api', playsRouter);
app.use('/api', artistRouter);
app.use('/api', writerRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
