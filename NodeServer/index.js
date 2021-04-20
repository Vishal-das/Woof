import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {_mong} from './db.js'
import router from './routes/usersRoutes.js';

const app = express();
const PORT = 8080;

const API_URL = `http://localhost:${PORT}/API/users`;
const API_URL_ECOM = `http://localhost:${PORT}/API/products`;
const API_URL_MDS = `http://localhost:${PORT}/API/doctors`;
const API_URL_WKS = `http://localhost:${PORT}/API/walkers`;


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
                    <b><h4>E-commerce restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_ECOM}/list"> ${API_URL_ECOM}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_ECOM}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_ECOM}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_ECOM}/{id}</i><br>
                    <b><h4>Medical-service restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_MDS}/list"> ${API_URL_MDS}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_MDS}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_MDS}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_MDS}/{id}</i><br>
                    <b><h4>Walkers restAPI</h4></b>
                    <b>GET request </b>: <a href="${API_URL_WKS}/list"> ${API_URL_WKS}/list </a> <br>
                    <b>POST request </b>: <i> ${API_URL_WKS}/ </i><br>
                    <b>PUT request </b>: <i>${API_URL_WKS}/{id} </i> <br>
                    <b>DELETE request </b>: <i>${API_URL_WKS}/{id}</i><br>
                    `;
    res.send(info)
    
})


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT} `));

app.use('/API/users',router);
