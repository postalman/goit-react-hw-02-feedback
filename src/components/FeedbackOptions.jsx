import PropTypes from 'prop-types';
import { BtnCSS, BtnCSS3, FeedbackCSS } from 'components/Styles.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackCSS>
      <BtnCSS type="button" onClick={onLeaveFeedback}>
        {Object.keys(options)[0]}
      </BtnCSS>
      <BtnCSS type="button" onClick={onLeaveFeedback}>
        {Object.keys(options)[1]}
      </BtnCSS>
      <BtnCSS3 type="button" onClick={onLeaveFeedback}>
        {Object.keys(options)[2]}
      </BtnCSS3>
    </FeedbackCSS>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  };