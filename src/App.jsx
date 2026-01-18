import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import IdentificationScreen from './components/IdentificationScreen';
import Question1_PriceBracket from './components/Question1_PriceBracket';
import Question2_Feature from './components/Question2_Feature';
import Question3_Budget from './components/Question3_Budget';
import Question4_Rating from './components/Question4_Rating';
import Question5_Factors from './components/Question5_Factors';
import Question6_SystemBudget from './components/Question6_SystemBudget';
import Question7_Appraisal from './components/Question7_Appraisal';
import Question8_Comparison from './components/Question8_Comparison';
import Question9_Trigger from './components/Question9_Trigger';
import SummaryScreen from './components/SummaryScreen';
import ThankYouScreen from './components/ThankYouScreen';
import { saveResponse } from './utils/api';


function App() {
  // Parse URL parameters on component mount
  const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || '';
    const brokerage = params.get('brokerage') || '';
    
    // Decode and replace underscores with spaces
    return {
      name: name ? decodeURIComponent(name).replace(/_/g, ' ') : '',
      brokerage: brokerage ? decodeURIComponent(brokerage).replace(/_/g, ' ') : '',
    };
  };

  const urlParams = getUrlParams();
  const hasUrlParams = urlParams.name || urlParams.brokerage;

  const [currentScreen, setCurrentScreen] = useState(
    hasUrlParams ? 'welcome' : 'identification'
  );
  const [responses, setResponses] = useState({
    surveyorName: urlParams.name || '',
    company: urlParams.brokerage || '',
    q1_priceBracket: '',
    q2_valuableFeature: '',
    q3_turnKeyBudget: '',
    q4_valueRating: '',
    q5_preventingFactors: '',
    q6_systemBudget: '',
    q7_appraisalConfidence: '',
    q8_listingComparison: '',
    q9_offerTriggerPrice: '',
  });

  const updateResponse = (key, value) => {
    setResponses((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleStart = () => {
    setCurrentScreen('question1');
  };

  const handleIdentificationComplete = () => {
    setCurrentScreen('question1');
  };

  const handlePrevious = () => {
    if (currentScreen === 'question1') {
      // If we came from URL params, go back to welcome
      // Otherwise, go back to identification
      setCurrentScreen(hasUrlParams ? 'welcome' : 'identification');
    } else {
      const currentQuestion = parseInt(currentScreen.replace('question', ''));
      setCurrentScreen(`question${currentQuestion - 1}`);
    }
  };

  const handleNext = () => {
    if (currentScreen === 'question9') {
      setCurrentScreen('summary');
    } else {
      const currentQuestion = parseInt(currentScreen.replace('question', ''));
      setCurrentScreen(`question${currentQuestion + 1}`);
    }
  };


  const handleSubmit = async () => {
    try {
      await saveResponse(responses);
      setCurrentScreen('thankyou');
    } catch (error) {
      // If JSON-server is not running, still show thank you screen
      // In a production app, you might want to show an error message
      console.error('Error saving response:', error);
      setCurrentScreen('thankyou');
    }
  };

  const handleBackToEdit = () => {
    setCurrentScreen('question9');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'identification':
        return (
          <IdentificationScreen
            surveyorName={responses.surveyorName}
            company={responses.company}
            onNameChange={(value) => updateResponse('surveyorName', value)}
            onCompanyChange={(value) => updateResponse('company', value)}
            onNext={handleIdentificationComplete}
          />
        );

      case 'welcome':
        return <WelcomeScreen onStart={handleStart} surveyorName={responses.surveyorName} />;

      case 'question1':
        return (
          <Question1_PriceBracket
            value={responses.q1_priceBracket}
            onChange={(value) => updateResponse('q1_priceBracket', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={1}
            totalQuestions={9}
          />
        );

      case 'question2':
        return (
          <Question2_Feature
            value={responses.q2_valuableFeature}
            onChange={(value) => updateResponse('q2_valuableFeature', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={2}
            totalQuestions={9}
          />
        );

      case 'question3':
        return (
          <Question3_Budget
            value={responses.q3_turnKeyBudget}
            onChange={(value) => updateResponse('q3_turnKeyBudget', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={3}
            totalQuestions={9}
          />
        );

      case 'question4':
        return (
          <Question4_Rating
            value={responses.q4_valueRating}
            onChange={(value) => updateResponse('q4_valueRating', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={4}
            totalQuestions={9}
          />
        );

      case 'question5':
        return (
          <Question5_Factors
            value={responses.q5_preventingFactors}
            onChange={(value) => updateResponse('q5_preventingFactors', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={5}
            totalQuestions={9}
          />
        );

      case 'question6':
        return (
          <Question6_SystemBudget
            value={responses.q6_systemBudget}
            onChange={(value) => updateResponse('q6_systemBudget', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={6}
            totalQuestions={9}
          />
        );

      case 'question7':
        return (
          <Question7_Appraisal
            value={responses.q7_appraisalConfidence}
            onChange={(value) => updateResponse('q7_appraisalConfidence', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={7}
            totalQuestions={9}
          />
        );

      case 'question8':
        return (
          <Question8_Comparison
            value={responses.q8_listingComparison}
            onChange={(value) => updateResponse('q8_listingComparison', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={8}
            totalQuestions={9}
          />
        );

      case 'question9':
        return (
          <Question9_Trigger
            value={responses.q9_offerTriggerPrice}
            onChange={(value) => updateResponse('q9_offerTriggerPrice', value)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            questionNumber={9}
            totalQuestions={9}
          />
        );

      case 'summary':
        return (
          <SummaryScreen
            responses={responses}
            onSubmit={handleSubmit}
            onBack={handleBackToEdit}
          />
        );

      case 'thankyou':
        return <ThankYouScreen />;

      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return <div>{renderScreen()}</div>;
}

export default App;
