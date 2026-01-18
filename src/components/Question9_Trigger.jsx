import QuestionCard from './QuestionCard';
import { useState } from 'react';

const Question9_Trigger = ({ value, onChange, onNext, onPrevious, questionNumber, totalQuestions }) => {
  const [displayValue, setDisplayValue] = useState(value ? value.toString() : '');

  const handleChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '');
    setDisplayValue(input);
    onChange(input ? parseInt(input, 10) : '');
  };

  const formatCurrency = (num) => {
    if (!num) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const canGoNext = value !== '' && value > 0;

  return (
    <QuestionCard
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      question="What would be your 'Offer Trigger' price if you knew there would be multiple offers in the next 7 days?"
      onNext={onNext}
      onPrevious={onPrevious}
      canGoNext={canGoNext}
    >
      <div>
        <div className="relative">
          <span className="absolute left-4 top-4 text-2xl font-semibold text-gray-500">$</span>
          <input
            type="text"
            inputMode="numeric"
            value={displayValue}
            onChange={handleChange}
            placeholder="0"
            className="input-field pl-10 text-2xl font-semibold"
          />
        </div>
        {value && value > 0 && (
          <p className="mt-3 text-primary-700 font-medium">
            {formatCurrency(value)}
          </p>
        )}
        <p className="mt-4 text-sm text-gray-600 italic">
          This is the price point that would motivate an immediate offer in a competitive scenario.
        </p>
      </div>
    </QuestionCard>
  );
};

export default Question9_Trigger;
