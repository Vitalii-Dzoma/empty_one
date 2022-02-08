import React from 'react';
import s from './Reviews.module.css';

class Reviews extends React.Component {
    static defaultProps = {
    total:0
}

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncreaseGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onIncreaseNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onIncreaseBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    };
    

    countTotalFeedback = () => {
        this.setState(prevState => {         
            return {
                total: prevState.good + prevState.bad + prevState.neutral
            }
        ;
      });
    
  };

    render() {
        countTotalFeedback = () => {

         }

        const total = this.state.good + this.state.bad + this.state.neutral;
    const percentage = Math.floor((this.state.good * 100) / total)
        
      
    // const { good, neutral, bad } = this.state;
    return (
      <div className={s.container}>
        <h1 className="feedback">Please, leave feedback</h1>
        <button
          className="container__button--good"
          name="good"
          onClick={this.onIncreaseGood}
        >
          good
        </button>
        <button
          className="container__button--neutral"
          name="neutral"
          onClick={this.onIncreaseNeutral}
        >
          neutral
        </button>
        <button
          className="container__button--bad"
          name="bad"
          onClick={this.onIncreaseBad}
        >
          bad
        </button>
        <h2 className="statistics">Statistics</h2>

        <p className="review__name">
          Good:
          <span className="review__counter">{this.state.good}</span>
        </p>
        <p className="review__name">
          Neutral:
          <span className="review__counter">{this.state.neutral}</span>
        </p>
        <p className="review__name">
          Bad:
          <span className="review__counter">{this.state.bad}</span>
        </p>
        <p className="review__name">
          Total:
          <span className="review__counter">{total}</span>
        </p>
        <p className="review__name">
          Positive feedback:
          <span className="review__counter">{percentage}%</span>
        </p>
      </div>
    );
  }
}

export default Reviews;
