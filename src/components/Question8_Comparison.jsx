import QuestionCard from './QuestionCard';

const Question8_Comparison = ({ value, onChange, onNext, onPrevious, questionNumber, totalQuestions }) => {
  const options = [
    'Better than comparable listings',
    'Similar to comparable listings',
    'Not as competitive as comparable listings'
  ];

  const canGoNext = value !== '';

  return (
    <QuestionCard
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      question="How does this property compare to active listings in the $675k - $690k range?"
      onNext={onNext}
      onPrevious={onPrevious}
      canGoNext={canGoNext}
    >
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
              value === option
                ? 'border-primary-600 bg-primary-50'
                : 'border-gray-300 hover:border-primary-300 hover:bg-gray-50'
            }`}
          >
            <input
              type="radio"
              name="listingComparison"
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="w-5 h-5 text-primary-600 focus:ring-primary-500 focus:ring-2"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">
              {option}
            </span>
          </label>
        ))}
      </div>
    </QuestionCard>
  );
};

export default Question8_Comparison;
