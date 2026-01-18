import QuestionCard from './QuestionCard';

const Question1_PriceBracket = ({ value, onChange, onNext, onPrevious, questionNumber, totalQuestions }) => {
  const options = [
    '$651k - $700k',
    '$601k - $650k',
    '$551k - $600k',
    '$501k - $550k',
    '$451k - $500k'
  ];

  const canGoNext = value !== '';

  return (
    <QuestionCard
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      question="What price bracket do you think this property falls into?"
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
              name="priceBracket"
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

export default Question1_PriceBracket;
