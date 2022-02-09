import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    
     <><button
        className="container__button--good"
        name="good"
        onClick={onLeaveFeedback}
    >
        good
    </button><button
        className="container__button--neutral"
        name="neutral"
        onClick={onLeaveFeedback}
    >
            neutral
        </button><button
            className="container__button--bad"
            name="bad"
            onClick={onLeaveFeedback}
        >
            bad
        </button></>
    
)

export default FeedbackOptions