const SummaryScreen = ({ responses, onSubmit, onBack }) => {
  const formatCurrency = (num) => {
    if (!num) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatRating = (rating) => {
    if (!rating) return '';
    return `${rating} out of 5`;
  };

  const summaryItems = [
    {
      label: 'Your Name',
      value: responses.surveyorName || 'Not provided',
    },
    {
      label: 'Company / Brokerage',
      value: responses.company || 'Not provided',
    },
    {
      label: 'Price Bracket',
      value: responses.q1_priceBracket || 'Not answered',
    },
    {
      label: 'Most Valuable Feature',
      value: responses.q2_valuableFeature || 'Not answered',
    },
    {
      label: 'Modern Turn-Key Budget',
      value: responses.q3_turnKeyBudget ? formatCurrency(responses.q3_turnKeyBudget) : 'Not answered',
    },
    {
      label: 'Value for Dollar Rating',
      value: responses.q4_valueRating ? formatRating(responses.q4_valueRating) : 'Not answered',
    },
    {
      label: 'Factors Preventing Offer',
      value: responses.q5_preventingFactors || 'Not answered',
    },
    {
      label: 'System Update Budget',
      value: responses.q6_systemBudget ? formatCurrency(responses.q6_systemBudget) : 'Not answered',
    },
    {
      label: 'Appraisal Confidence',
      value: responses.q7_appraisalConfidence || 'Not answered',
    },
    {
      label: 'Comparison to Listings',
      value: responses.q8_listingComparison || 'Not answered',
    },
    {
      label: 'Offer Trigger Price',
      value: responses.q9_offerTriggerPrice ? formatCurrency(responses.q9_offerTriggerPrice) : 'Not answered',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="card w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
          Review Your Answers
        </h1>
        <p className="text-gray-600 mb-8">
          Please review your responses before submitting your feedback.
        </p>

        <div className="space-y-6 mb-8">
          {summaryItems.map((item, index) => {
            const isInfoField = index === 0 || index === 1;
            const questionNumber = isInfoField ? '' : index - 1;
            return (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-0"
              >
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  {isInfoField ? item.label : `${questionNumber}. ${item.label}`}
                </h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="btn-secondary flex-1"
          >
            Back to Edit
          </button>
          <button
            onClick={onSubmit}
            className="btn-primary flex-1"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;
