const ThankYouScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="card w-full max-w-2xl text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Thank You
          </h1>
        </div>
        
        <div className="space-y-4 text-lg text-gray-700">
          <p className="leading-relaxed">
            Thank you for your professional insight.
          </p>
          <p className="leading-relaxed font-medium text-primary-800">
            Your feedback helps our sellers make informed, data-driven decisions.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            3561 W Dublin St, Chandler, AZ 85226
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScreen;
