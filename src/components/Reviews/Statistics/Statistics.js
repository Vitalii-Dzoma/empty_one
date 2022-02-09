import React from 'react';

const Statistics = ({good,neutral,bad,total,percentage}) => (  
    <div>
      <h2 className="statistics">Statistics</h2>
      Good:
      <p className="review__name">
        <span className="review__counter">{good}</span>
      </p>
      <p className="review__name">
        Neutral:
        <span className="review__counter">{neutral}</span>
      </p>
      <p className="review__name">
        Bad:
        <span className="review__counter">{bad}</span>
      </p>
      <p className="review__name">
        Total:
        <span className="review__counter">{total}</span>
      </p>
      <p className="review__name">
        Positive feedback:
        <span className="review__counter">
          {total === 0?0:percentage}
          %
        </span>
      </p>
    </div>
)

export default Statistics