import React from 'react';
import AppTwo from './AppTwo.js'
import Dashboard from './Dashboard.js'
import TopTracks from './TopTracks.js'

const code = new URLSearchParams(window.location.search).get('code')
function App() {
   
   return code ? <Dashboard code = {code} /> : <AppTwo/>
}
export default App
