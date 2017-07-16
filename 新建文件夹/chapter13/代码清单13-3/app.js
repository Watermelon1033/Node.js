﻿var mongo = require('mongodb');
var host = "localhost";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db('node-mongo-examples', 
new mongo.Server(host, port,{auto_reconnect:true}), {safe:true});
db.open(function(err,db) {
    db.collection('users', function(err,collection) {
        collection.insert({username:'凌牛',firstname:'陆'},
        function(err, docs) {
            if(err) throw err
            else{
                console.log(docs);
                db.close(false); 
                //db.close(true);
            }
        });
    });
});
db.once('close',function(err,db){
    if(err) throw err;
    else{                   
        db.open(function(err,db) {
            db.collection('users', function(err,collection) {
                collection.insert({username:'三',firstname:'张'},
                function(err, docs) {
                    if(err) throw err
                    else{
                        console.log(docs);
                        db.close(true);
                    }
                });
            });
        });
    }
});
