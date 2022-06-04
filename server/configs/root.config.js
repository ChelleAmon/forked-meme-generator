import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../../webpack.config.dev.js';



dotenv.config();

const envConfig = {
    mongoUri: process.env.mongo_uri,
    localMongoUri: process.env.local_mongo_uri,
}

const __dirname = path.resolve();
const clientPath = path.join(__dirname, '/client')
const filePath = path.join(clientPath, '/index.html')


const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(cors())
app.use(express.json());
app.use(express.static(clientPath))


export { app, envConfig, filePath };




