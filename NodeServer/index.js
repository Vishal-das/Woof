import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {_mong} from './db.js'
import userRouter from './routes/usersRoutes.js';
import dogRouter from './routes/dogRoutes.js';
import vetRouter from './routes/vetRoutes.js';
import walkerRequestRouter from './routes/walkerRequestRouter.js'

const app = express();
const PORT = 8080;

const API_URL = `http://localhost:${PORT}/API/users`;
const API_URL_DOG = `http://localhost:${PORT}/API/dogs`;
const API_URL_ECOM = `http://localhost:${PORT}/API/products`;
const API_URL_MDS = `http://localhost:${PORT}/API/vets`;
const API_URL_RQT = `http://localhost:${PORT}/API/requests`;


// //provide the CORS permission host to write request to this node server
let corsOption ={
    origin : 'http://localhost:4200',
    optionSuccessStatus : 200
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.get('/',(req,res)=>{

    const info = `<h3><i>Useful URLs for using Woof API .....</i></h3><br><hr>
                    <b><h4>Users restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL}/list"> ${API_URL}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL}/{id}</i><br>
                    <b><h4>Dog restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_DOG}/list"> ${API_URL_DOG}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_DOG}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_DOG}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_DOG}/{id}</i><br>
                    <b><h4>Requests restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_RQT}/list"> ${API_URL_RQT}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_RQT}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_RQT}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_RQT}/{id}</i><br>                    
                    <b><h4>Medical-service restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_MDS}/list"> ${API_URL_MDS}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_MDS}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_MDS}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_MDS}/{id}</i><br>
                    <b><h4>E-commerce restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_ECOM}/list"> ${API_URL_ECOM}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_ECOM}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_ECOM}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_ECOM}/{id}</i><br>
                    `;
    res.send(info)
    
})


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT} `));

app.use('/API/users',userRouter);
app.use('/API/dogs',dogRouter);
app.use('/API/vets',vetRouter);
app.use('/API/requests',walkerRequestRouter);

