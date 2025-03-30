require('dotenv').config();
import React from 'react';
import styles from './name.module.css';

const AUTH_URL = process.env.AUTH_URL
export default function Button() {
  return (
    <a className = {styles.custombutton} href={AUTH_URL}>
       Login with Spotify
    </a>
  )
}