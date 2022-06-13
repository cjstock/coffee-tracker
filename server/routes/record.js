const e = require('express');
const { response } = require('express');
const express = require('express');

const recordRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

recordRoutes.route('/coffees').get(function (req, res) {
    let db_connect = dbo.getDb('coffees');
    db_connect
        .collection('coffees')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route('coffees/:id').get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection('coffees')
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
});

recordRoutes.route('/coffees/add').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        country: req.body.country,
        region: req.body.region,
        process: req.body.process,
        variety: req.body.variety,
        altitude: req.body.altitude,
        roast: req.body.roast,
        cuppingNotes: req.body.cuppingNotes,
        brewMethods: req.body.brewMethods,
        extraNotes: req.body.extraNotes,
    };
    db_connect.collection('coffees').insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

recordRoutes.route('/coffees/update/:id').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newValues = {
        $set: {
            country: req.body.country,
            region: req.body.region,
            process: req.body.process,
            variety: req.body.variety,
            altitude: req.body.altitude,
            roast: req.body.roast,
            cuppingNotes: req.body.cuppingNotes,
            brewMethods: req.body.brewMethods,
            extraNotes: req.body.extraNotes,
        },
    }
});

recordRoutes.route('/coffees/:id').delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id)};
    db_connect.collection('coffees').deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log('1 document deleted');
        response.json(obj);
    });
});

module.exports = recordRoutes;