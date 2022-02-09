import React from 'react';
import Reviews from "./Reviews/Reviews";
import calculateTotalFeedback from "./Reviews/Reviews"

export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Reviews 
      />
     
    </div>
  );
};
