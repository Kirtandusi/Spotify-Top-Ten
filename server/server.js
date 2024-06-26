require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    });

    spotifyAPI
        .refreshAccessToken()
        .then((data) => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
});

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });

    // Include 'user-top-read' in the scope
    const scope = ['user-read-private', 'user-read-email', 'user-top-read'];

    spotifyAPI.authorizationCodeGrant(code, function(err, data) {
        if (err) {
          console.error('Something went wrong!', err);
        } else {
          // Your token is stored in data.body['access_token']
          res.json({
            accessToken: data.body['access_token'],
            refreshToken: data.body['refresh_token'],
            expiresIn: data.body['expires_in'],
          });
        }
      });
});

app.listen(3001);
