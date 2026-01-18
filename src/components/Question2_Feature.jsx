import QuestionCard from './QuestionCard';

const Question2_Feature = ({ value, onChange, onNext, onPrevious, questionNumber, totalQuestions }) => {
  const canGoNext = value.trim() !== '';

  return (
    <QuestionCard
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      question="What is the most valuable feature of this property?"
      onNext={onNext}
      onPrevious={onPrevious}
      canGoNext={canGoNext}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Share what stands out most about this property..."
        className="textarea-field"
      />
    </QuestionCard>
  );
};

export default Question2_Feature;
