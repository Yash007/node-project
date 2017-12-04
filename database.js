/*
    Project Name: Patient Data Clinical Management
    Author: Yashkumar Sompura
    College ID: 300967186
    Subject: Node JS project
    keywords: RESTFull API development
*/

//Mongo DB Database Variables and required header files
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var objectId = require('mongodb').ObjectID;
var mongoHost = 'mongodb://localhost:27017/patient-clinical-data-management';
var userGetDoc = [];
var patientGetDoc = [];

function userGetData()  {
    mongoClient.connect(mongoHost, function(err, db)   {
        if(err) {
            console.log("Error in Connection");
        }
        else    {
            var cursor = db.collection('users').find();
            if (userGetDoc.length > 0 )    {
                userGetDoc = [];
            }
            cursor.each(function(err, doc) {   
                if(doc != null) {
                    userGetDoc.push(doc);
                }
            });
        }
    });
    return userGetDoc;
}

function patientGetData()  {
    mongoClient.connect(mongoHost, function(err, db)   {
        if(err) {
            console.log("Error in Connection");
        }
        else    {
            var cursor = db.collection('patients').find();
            if (patientGetDoc.length > 0 )    {
                patientGetDoc = [];
            }
            cursor.each(function(err, doc) {   
                if(doc != null) {
                    patientGetDoc.push(doc);
                }
            });
        }
    });
    return patientGetDoc;
}

module.exports = {
    userGetData,
    patientGetData
}
