import React from 'react';
import TopTracks from './TopTracks'; // Import the TopTracks component
import useAuth from './useAuth';

export default function Dashboard({ code }) {
  const access_token = useAuth(code);

  return (
    <div>
      {/* Pass the code prop to the TopTracks component */}
      <TopTracks access_token={access_token} />
    </div>
  );
}
