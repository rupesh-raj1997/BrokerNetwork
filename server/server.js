import express from "express";
import fs from 'fs';
import path from 'path';
import App from '../src/App';
import ReactDOMServer from 'react-dom/server';
import React from "react";

const app = express();
const PORT = 6969;

app.use(express.json());

app.use('^/$', (req, res, next) => {
    fs.readFile(
        path.resolve('./build/index.html'),
        'utf-8',
        (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Some error happened')
            }
            return res.send(
                data.replace(
                    `<div id="root"></div>`,
                    `<div id="root">${ReactDOMServer.renderToString(<App />)
                    }</div>`)
            );
        }
    )
})


app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/v1/profile', (req, res) => {
    res.send({
        name: 'Rupesh Raj',
        age: 24,
        linkedin: 'https://www.linkedin.com/in/rupesh-raj1997/'
    })
})

app.listen(PORT, () => {
    console.log(`App Launched on ${PORT}`)
})