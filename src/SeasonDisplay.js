import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const text =
    season === 'winter' ? "Burr it's chilly!" : "Let's hit the beach!";

  return <div>{text}</div>;
};

export default SeasonDisplay;
