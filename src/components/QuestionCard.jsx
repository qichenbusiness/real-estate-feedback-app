const QuestionCard = ({ questionNumber, totalQuestions, question, children, onNext, onPrevious, canGoNext = true }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="card w-full">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-primary-600">
              Question {questionNumber} of {totalQuestions}
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
            {question}
          </h2>
        </div>
        
        <div className="mb-8">
          {children}
        </div>
        
        <div className="flex gap-4">
          {questionNumber > 1 && (
            <button
              onClick={onPrevious}
              className="btn-secondary flex-1"
            >
              Previous
            </button>
          )}
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className={`btn-primary flex-1 ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {questionNumber === totalQuestions ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
