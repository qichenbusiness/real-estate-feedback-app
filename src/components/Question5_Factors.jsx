import QuestionCard from './QuestionCard';

const Question5_Factors = ({ value, onChange, onNext, onPrevious, questionNumber, totalQuestions }) => {
  const canGoNext = value.trim() !== '';

  return (
    <QuestionCard
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      question="What factors would prevent you from making an offer today?"
      onNext={onNext}
      onPrevious={onPrevious}
      canGoNext={canGoNext}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="List any concerns, conditions, or factors that would impact your offer..."
        className="textarea-field"
      />
    </QuestionCard>
  );
};

export default Question5_Factors;
