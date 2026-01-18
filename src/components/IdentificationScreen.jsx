const IdentificationScreen = ({ surveyorName, company, onNameChange, onCompanyChange, onNext }) => {
  const canContinue = surveyorName.trim() !== '';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="card w-full max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Let's Get Started
          </h1>
          <p className="text-lg text-gray-600">
            Please provide your information to begin the survey.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label htmlFor="surveyorName" className="block text-lg font-semibold text-gray-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="surveyorName"
              type="text"
              value={surveyorName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Enter your full name"
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-lg font-semibold text-gray-700 mb-2">
              Company / Brokerage <span className="text-gray-500 text-sm">(Optional)</span>
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => onCompanyChange(e.target.value)}
              placeholder="Enter your company or brokerage name"
              className="input-field"
            />
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={!canContinue}
          className={`btn-primary w-full text-lg py-4 ${!canContinue ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continue to Survey
        </button>
      </div>
    </div>
  );
};

export default IdentificationScreen;
