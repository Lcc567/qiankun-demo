const express = require('express')
const lowdb = require('lowdb')
const bodyParser = require('body-parser')
const FileAsync = require('lowdb/adapters/FileAsync')

const app = express()
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

const adapter = new FileAsync('db.json')

lowdb(adapter)
    .then(db => {
        app.post('/login', (req, res) => {
            db.get({ user }).push({
                name: 'lichao', motto: "Everybody likes to go to the movies when they're sad."
            }).write().then(data => res.end(data))
        })
    }).then(() => {
        app.listen(3000, () => {
            console.log('server starting');
        })
    })
