import React from 'react';
import styles from './name.module.css';

function Logout({ setAccessToken }) {
  const handleLogout = () => {
    // Clear the access token from state
    //setAccessToken(null);

    // Open the Spotify logout page in a new window or tab
    window.open('https://www.spotify.com/logout/', '_blank');

    // Redirect the main window to localhost:3000
    window.location.href = 'http://localhost:3000';
  };

  return (
    <button className={styles.custombutton} onClick={handleLogout}>Logout</button>
  );
}

export default Logout;