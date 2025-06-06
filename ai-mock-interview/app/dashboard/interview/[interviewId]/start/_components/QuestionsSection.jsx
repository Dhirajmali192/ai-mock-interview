"use client";
import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text to speech.");
    }
  };

  if (!mockInterviewQuestion || mockInterviewQuestion.length === 0) {
    return (
      <div className="p-5 border rounded-lg my-10">
        <p className="text-red-500">No questions available.</p>
      </div>
    );
  }

  const currentQuestion = mockInterviewQuestion[activeQuestionIndex];

  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockInterviewQuestion.map((_, index) => (
          <h2
            key={index}
            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer 
              ${activeQuestionIndex === index 
                ? 'bg-blue-700 text-white' 
                : 'bg-secondary text-black'}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-md md:text-lg flex items-center gap-3">
          {currentQuestion?.question}
          <Volume2
            className="cursor-pointer hover:text-blue-600 transition"
            onClick={() => textToSpeech(currentQuestion?.question)}
            title="Read aloud"
          />
        </h2>
      </div>

      <div className="border rounded-lg p-5 bg-blue-100 mt-10">
        <h2 className="flex gap-2 items-center text-primary">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <p className="text-sm text-primary mt-2">
          Enable video webcam and microphone to start your AI-generated mock interview. 
          It has 5 questions you can answer, and at the end, you'll receive a report based on your answers.
          <br />
          <strong>Privacy:</strong> We do not record your video. You can disable webcam access anytime.
        </p>
      </div>
    </div>
  );
};

export default QuestionsSection;
