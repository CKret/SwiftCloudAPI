import "reflect-metadata";

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { router as artistRouter } from './routes/ArtistRoutes';
import { router as writerRouter } from './routes/WriterRoutes';
import { router as songRouter } from './routes/SongRoutes';
// import { router as mockPersonRouter } from './test/routes/MockPersonRoutes';

dotevnv.config()

if (!process.env.PORT) {
    console.log('No port value specified...');
}
const PORT = parseInt(process.env.PORT) | 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api', artistRouter);
app.use('/api', writerRouter);
app.use('/api', songRouter);

// app.use('/api', mockPersonRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
