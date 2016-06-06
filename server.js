// import cluster from 'cluster'
// import express from 'express'
// import morgan from 'morgan'
// import http from 'http'
// import cookieParser from 'cookie-parser'
// import bodyParser from 'body-parser'
// import compression from 'compression'
// import os from 'os'
var cluster = require('cluster'),
    express = require('express'),
    path = require('path'),
    http = require('http'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    os = require('os'),
    httpProxy = require('http-proxy'),
    server = http.createServer(app);

var proxy = httpProxy.createProxyServer(app);
var app = express();
var publicPath = path.resolve(__dirname, 'src');


  if(cluster.isMaster){
    var cpuCount = os.cpus().length;
    for(var i = 0; i < cpuCount; i++)
      cluster.fork()
      cluster.on('exit', function(worker){
        console.log('Worker %d died :(', worker.id);
        cluster.fork();
      })
  } else {
    app.use(compression())
    app.use(cookieParser("AbyssJS"))
    app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}))
    app.use(bodyParser.json())
    app.use(express.static(publicPath));
    app.all('*', function (req,res) {
      proxy.web(req, res, {
        target: 'http://localhost:8001/'
      })
    })
    proxy.on('error', function(e) {
      console.log('Could not connect to proxy, please try again...');
    })
    proxy.on('success', function(e) {
      console.log('Connected!!');
    })
    // http.listen(8087, function(){
    //     console.log("Server HTTP run: 8087 (cluster "+cluster.worker.id+")")
    // })
    // proxy.listen(8125, function(){
    //   console.log("proxy HTTP run: 8125 (cluster "+cluster.worker.id+")")
    // })
    app.listen(8123, function () {
      console.log('Server running on port ' + 8123);
    })
  }
