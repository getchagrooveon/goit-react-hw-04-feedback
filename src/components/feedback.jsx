import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return;
    } else
      return (
        ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) + `%`
      );
  }

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback yet'} />
          )}
        </Section>
      </>
    );
  }
}
