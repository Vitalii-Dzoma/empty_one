import React from 'react';
import s from './Reviews.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from 'components/Notification/Notification';
class Reviews extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    onIncrease = (evt) => {
        const { name } = evt.target
 
        
       this.setState({ [name]: this.state[name] + 1 });

            return this.state[name]
        
    }
    

//   onIncreaseGood = () => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };
//   onIncreaseNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };

//   onIncreaseBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

  countTotalFeedback = () => {
      const total = this.state.good + this.state.bad + this.state.neutral;
      
             console.log(this.state.good);
      return total ;
    };
    

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return percentage;
    };
    

  render() {
    return (
      <div className={s.container}>
        <Section title={'Please, leave feedback'}>
          {/* <button
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
            </button> */}
                {!this.state.good && !this.state.neutral && !this.state.bad
                    ?
               <> <Notification message={'There is no feedback'} />
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrease}
                        /></>
                        :<><FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrease}
                        />
                        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          /></>}
                
          
        </Section>
        {/* <h2 className="statistics">Statistics</h2>

          Good:
        <p className="review__name">
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
          <span className="review__counter">{this.countTotalFeedback()}</span>
        </p>
        <p className="review__name">
          Positive feedback:
          <span className="review__counter">
            {this.countTotalFeedback() === 0
              ? 0
              : this.countPositiveFeedbackPercentage()}
            %
          </span>
        </p> */}
      </div>
    );
  }
}

export default Reviews;
