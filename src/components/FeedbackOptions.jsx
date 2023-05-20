

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
    return (
        <div>
            <button type="button" onClick={onLeaveFeedback}>
            {Object.keys(options)[0]}
            </button>
            <button type="button" onClick={onLeaveFeedback}>
            {Object.keys(options)[1]}
            </button>
            <button type="button" onClick={onLeaveFeedback}>
            {Object.keys(options)[2]}
            </button>
          </div>
    )
    
}