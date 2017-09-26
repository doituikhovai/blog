const express = require('express');
const mysql = require('mysql');
const path = require('path');
const vhost = require('vhost');
const app = express();
const admin = express();
const port = process.env.PORT || 4000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
});
connection.connect(function(error){
    if (error) throw error;
});
const localDomain = vhost('www.phamhoangnam-blog.info', express.static('phamhoangnam-blog'));

app.use(localDomain);
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

admin.get('/', function(req, res) {
    res.send('admin');
});

app.use('/admin', admin);

app.listen(port);