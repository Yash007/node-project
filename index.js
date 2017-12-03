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


//Mongo DB Database Variables and required header files
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var objectId = require('mongodb').ObjectID;
var mongoHost = 'mongodb://localhost:27017/patient-clinical-data-management';
var tempDoc = [];

//GET requests for listing Doctors and nurses
app.get('/users', function(req,res) {
    
    mongoClient.connect(mongoHost, function(err, db)   {
        if(err) {
            console.log("Error in Connection");
        }
        else    {
            console.log("Connection Established with mongo db");
            var cursor = db.collection('users').find();
            if (tempDoc.length > 0 )    {
                tempDoc = [];
            }
            cursor.each(function(err, doc) {   
                if(doc != null) {
                    tempDoc.push(doc);
                }
            });
            db.close();
        } 
    });

    res.json(tempDoc);

});

//GET Requests for listing Patients
app.get('/patients', function(req, res) {

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