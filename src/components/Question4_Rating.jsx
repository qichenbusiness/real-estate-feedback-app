import QuestionCard from './QuestionCard';

const Question4_Rating = ({ value, onChange, onNext, onPrevious, questionNumber, totalQuestions }) => {
  const canGoNext = value !== '';

  const handleRatingClick = (rating) => {
    onChange(rating);
  };

  return (
    <QuestionCard
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      question="How would you rate the value for dollar in the $680k range?"
      onNext={onNext}
      onPrevious={onPrevious}
      canGoNext={canGoNext}
    >
      <div>
        <div className="flex justify-center gap-4 mb-6">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className={`w-16 h-16 rounded-full text-2xl font-bold transition-all ${
                value === rating
                  ? 'bg-primary-600 text-white scale-110 shadow-lg'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105'
              }`}
            >
              {rating}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600 px-4">
          <span>Poor Value</span>
          <span>Excellent Value</span>
        </div>
        {value && (
          <p className="mt-6 text-center text-primary-700 font-semibold text-lg">
            You selected: {value} out of 5
          </p>
        )}
      </div>
    </QuestionCard>
  );
};

export default Question4_Rating;
