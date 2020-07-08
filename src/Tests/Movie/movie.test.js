process.env.NODE_ENV = 'test';

const request = require('supertest');
const Server = require('../../server');
const mongoose = require('mongoose');
const darkKnightFixture = require('../Models/dark.knight.fixture.json');
const fightClubFixture = require('../Models/fight.club.fixture.json');
const pulpFictionFixture = require('../Models/pulp.fiction.fixture.json');
const theGodfatherFixture = require('../Models/the.godfather.fixture.json');
const theMatrixFixture = require('../Models/the.martix.fixture.json');
const chai = require('chai');

require("dotenv").config();

describe('Movies-API', function () {
    const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true }
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
    const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

    before(function (done) {
        mongoose.createConnection(DB_URI, mongoConfig).createCollection('movie')
        done()
    })

    after(function (done) {
        it('should connect close Mongo connection')
        mongoose.connection.close()
        done()
    })



    it('should run healthcheck and be all good | GET /healthcheck', function (done) {
        request(Server)
            .get('/healthcheck')
            .expect(200)
            .end((err, res) => {
                if (err) done(err)

                done()
            })
    })

    it('should create a movie | POST /movie', function (done) {
        const url = '0.0.0.0:9000/movie'
        request(Server)
            .post(url, (err, response, body) => {
                if (err) done(err)

                    .send(darkKnightFixture)
                    .send(theGodfatherFixture)
                    .send(theMatrixFixture)
                    .send(fightClubFixture)
                    .send(pulpFictionFixture)
                    .expect(201)
                    .expect(body.length).not.to.be(0)
            })
            .catch(done)
        done()
    })

    it('should search for uncesored movies | GET /search', function (done) {
        const url = '0.0.0.0:9000/search?censorship_level=SEM_CENSURA'
        request(Server)
            .get(url, (err, response) => {
                if (err) done(err)
                    .expect(200)
                    .expect(response).to.be(darkKnightFixture, theGodfatherFixture, theMatrixFixture)
            })
            .catch(done)
        done()
    })


    it('should search for censored movies | GET /search', function (done) {
        const url = '0.0.0.0:9000/search?censorship_level=CENSURADO'
        request(Server)
            .get(url, (err, response) => {
                if (err) done(err)
                    .expect(200)
                    .expect(response).to.be(pulpFictionFixture, fightClubFixture)
            })
            .catch(done)
        done()
    })
})