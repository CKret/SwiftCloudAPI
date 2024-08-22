import * as dotevnv from "dotenv"
import { DataSource } from "typeorm"
import { ArtistEntity } from "../src/models/ArtistEntity";
import { WriterEntity } from "../src/models/WriterEntity";
import { SongEntity } from "../src/models/SongEntity";
import { AlbumEntity } from "../src/models/AlbumEntity";
import { AlbumSongEntity } from "../src/models/AlbumSongEntity";
import { ArtistSongEntity } from "../src/models/ArtistSongEntity";
import { SongWriterEntity } from "../src/models/SongWriterEntity";
import { PlaysEntity } from "../src/models/PlaysEntity";

dotevnv.config();

export const SwiftCloudDataSource = new DataSource({
    type: 'mssql',
    host: process.env.DBSERVER,
    port: 1433,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    schema: 'dbo',
    entities: [
        ArtistEntity, WriterEntity, SongEntity, AlbumEntity, AlbumSongEntity, ArtistSongEntity, SongWriterEntity, PlaysEntity
    ],
    synchronize: true,
    options: {
        encrypt: false,
    },
    logging: true
});

SwiftCloudDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization!\n" + err);
    });
