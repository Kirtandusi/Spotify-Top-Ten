import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import styles from './name.module.css';
import Logout from './Logout';
require('dotenv').config();
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
});

export default function TopTracks({ access_token }) {
  console.log('access_token:', access_token);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    if (access_token) {
      spotifyApi.setAccessToken(access_token);
  
      spotifyApi.getMyTopTracks({ limit: 10 })
        .then(function (data) {
          if (data && data.body && data.body.error) {
            console.error('Error fetching top tracks:', data.body.error);
          } else if (data && data.body) {
            setTopTracks(data.body.items);
          } else {
            console.error('Unexpected response format:', data);
          }
        })
        .catch(function (err) {
          console.error('Error fetching top tracks:', err);
        });
    }
  }, [access_token]);

  return (
    <div>
      <div className={styles.bar}>
        <div className = {styles.padder}>
        <h2>Your Top Tracks</h2>
        </div>
      </div>

    <div className = {styles.main}>
    <ul>
        {topTracks.map((track) => (
          <b>
          <li key={track.id}>{track.name}</li>
          </b>
          
        ))}
      </ul>
    </div>
    <div  className = {styles.center}>
    <Logout/>
    </div>
      
    </div>
  );
}
