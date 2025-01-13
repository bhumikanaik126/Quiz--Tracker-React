import { useState } from "react";
import { AddQuiz } from "./AddQuiz";
import { DeleteQuiz } from "./DeleteQuiz";

export const QuizStart = () => {
  const [questions, setQuestions] = useState([
    {
      question: "what is the capital of France?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Paris",
    },
    {
      question: "what is the capital of Ireland?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "Dublin",
    },
    {
      question: "what is the capital of England?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "London",
    },
    {
      question: "what is the capital of USA?",
      options: ["New York", "London", "Paris", "Dublin"],
      answer: "New York",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function answerHandler(option) {
    if (option == questions[currentQuestion].answer) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  }
  return (
    <div>
      {currentQuestion < questions.length ? (
        <>
          <div className="progressBar">
            <div>
              {currentQuestion + 1}/{questions.length}
            </div>
            <div>
              <progress
                value={((currentQuestion + 1) / questions.length) * 100}
                max={100}
              >
                progress
              </progress>
            </div>
          </div>

          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <>
                <button
                  onClick={() => {
                    answerHandler(option);
                  }}
                  key={index}
                >
                  {option}
                </button>
                <br /> <br />
              </>
            );
          })}
        </>
      ) : (
        <>
          <div>
            Score : {score}
            <br />
            <button
              className="button"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
              }}
            >
              Restart
            </button>
            
            <AddQuiz questions={questions} setQuestions={setQuestions}/>
            <br /> <br />
            <DeleteQuiz questions={questions} setQuestions={setQuestions}/>
               
          </div>
        </>
      )}
    </div>
  );
};
