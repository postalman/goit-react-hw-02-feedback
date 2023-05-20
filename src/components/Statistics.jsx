import PropTypes from 'prop-types';
import React from 'react';
import { Notification } from 'components/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total() === 0 ? (
    <Notification message="There is no feedback"></Notification>
  ) : (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total()}</p>
      <p>Positive feeback:{positivePercentage()}%</p>
    </div>
  );
};
