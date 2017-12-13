/*
    Project Name: Patient Data Clinical Management
    Author: Yashkumar Sompura
    College ID: 300967186
    Subject: Node JS project
    keywords: RESTFull API development
*/

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var connection = require('./database.js');

var userData = connection.userGetData();
var patientData = connection.patientGetData();

//GET requests for listing Doctors and nurses
app.get('/users', function(req,res) {
    console.log(userData);
    res.json(userData);
});

//GET Requests for listing Patients
app.get('/patients', function(req, res) {
    res.json(patientData);
});

//GET Request for listing Patient's records
app.get('/patients/:id/records', function(req,res){

});

//POST Request for adding Doctors and Nurse

//POST Request for adding Patients

//PUT Request for Updating Doctors and Nurses

//PUT Request for Updating Patient's record

//Server Created and Listening method
var server = app.listen(3000,'127.0.0.1', function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server Established!!");
    console.log("Welcome to Patient Data Clinical Management System");
    console.log('Server is listening at http://%s:%s', host, port);
});