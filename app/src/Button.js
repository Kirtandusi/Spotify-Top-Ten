import React from 'react';
import styles from './name.module.css';
const AUTH_URL = 
"https://accounts.spotify.com/authorize?client_id=18df2aee78534bc7b3b6ea6c07e624cd&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read"
export default function Button() {
  return (
    <a className = {styles.custombutton} href={AUTH_URL}>
       Login with Spotify
    </a>
  )
}