'use strict';

require('dotenv').config({ path: './variables.env' });
const db = require('monk')(process.env.DB_PATH);

const api = db.get(process.env.DB_NAME);

<<<<<<< HEAD
module.exports.create = (event, context, callback) => {
  api.insert(JSON.parse(event.body))
    .then((data) => {
      const body = data;
      context.callbackWaitsForEmptyEventLoop = false;
      callback(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        statusCode: 200,
        body: JSON.stringify(body)
      });
=======
  connectToDatabase()
    .then(() => {
      Note.create(JSON.parse(event.body))
      //Note.create(event.body)
    
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the note.'
        }));
>>>>>>> d2c3b0204c8c53ec4c9e29f1c2a646ddc4ad66a5
    });
};

module.exports.getAll = (data_, context, callBack) => {
  api.find({})
    .then((data) => {
      const body = data;
      context.callbackWaitsForEmptyEventLoop = false;
      callBack(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        statusCode: 200,
        body: JSON.stringify(body)
      });
    });
};

module.exports.getOne = (data_, context, callBack) => {
  api.findOne(data_.pathParameters.id)
    .then((data) => {
      const body = data;
      context.callbackWaitsForEmptyEventLoop = false;
      callBack(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        statusCode: 200,
        body: JSON.stringify(body)
      });
    });
};

module.exports.delete = (data_, context, callBack) => {
  api.remove(data_.pathParameters.id)
    .then((data) => {
      const body = data;
      context.callbackWaitsForEmptyEventLoop = false;
      callBack(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        statusCode: 200,
        body: JSON.stringify(body)
      });
    });
};

module.exports.update = (event, context, callback) => {
  api.update(event.pathParameters.id, JSON.parse(event.body), { new: true })
    .then((data) => {
      const body = data;
      context.callbackWaitsForEmptyEventLoop = false;
      callback(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        statusCode: 200,
        body: JSON.stringify(body)
      });
    });
};
