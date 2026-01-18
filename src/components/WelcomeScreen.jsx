const WelcomeScreen = ({ onStart, surveyorName }) => {
  const heading = surveyorName 
    ? `Welcome, ${surveyorName}. Thank you for your professional insight on 3561 W Dublin St.`
    : 'Property Feedback Survey';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="card w-full max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {heading}
          </h1>
          <img 
            src="/0_house_front.jpg" 
            alt="3561 W Dublin St, Chandler, AZ 85226" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '20px' }} 
          />
          <img 
            src="/3561_W_Dublin_St_Floor_Plan.jpg" 
            alt="Floor Plan - 3561 W Dublin St" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '20px' }} 
          />
        </div>
        
        <div className="mb-8">
          <div className="bg-primary-50 rounded-lg p-6 text-center border-2 border-primary-200">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
              3561 W Dublin St
            </h2>
            <p className="text-xl text-primary-700">
              Chandler, AZ 85226
            </p>
          </div>
        </div>
        
        <div className="text-center text-gray-700 mb-8">
          <p className="text-lg">
            Your professional insight helps our sellers make informed, data-driven decisions.
          </p>
          <p className="text-base mt-2 text-gray-600">
            Please take a few moments to share your feedback.
          </p>
        </div>
        
        <button
          onClick={onStart}
          className="btn-primary w-full text-lg py-4"
        >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
