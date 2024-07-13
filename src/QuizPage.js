import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

const questions = [
  {
    question: "Who is Real Madrid's highest goal scorer of all time?",
    choices: ["Cristiano Ronaldo", "Karim Benzema", "Raul"],
    answer: "Cristiano Ronaldo"
  },
  {
    question: "Who won the 2018 Ballon d'Or?",
    choices: ["Luka Modric", "Cristiano Ronaldo", "Karim Benzema"],
    answer: "Luka Modric"
  },
  {
    question: "In which stadium did Real Madrid win the Champions League in 2024?",
    choices: ["Wembley", "Santiago Bernabéu", "Old Trafford"],
    answer: "Wembley"
  }
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  const timerRef = useRef(null);

  useEffect(() => {
    if (timeLeft === 0) {
      setFeedback(`Time is up! Your score: ${score}/${questions.length}`);
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [timeLeft, score]);

  const handleChoiceClick = (choice) => {
    setUserAnswer(choice);
  };

  const handleSubmit = () => {
    if (userAnswer) {
      setUserAnswers([...userAnswers, userAnswer]);
      if (userAnswer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setFeedback('Answer submitted!');
      setTimeout(() => {
        setFeedback('');
        setUserAnswer('');
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setTimeLeft(0);
        }
      }, 1000);
    } else {
      setFeedback('Please select an option!');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setFeedback('');
    setUserAnswer('');
    setTimeLeft(60);
  };

  return (
    <div>
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      <main className="quiz-section">
        <h1>Quiz</h1>
        <div className="quiz-container">
          {timeLeft > 0 && currentQuestion < questions.length ? (
            <>
              <h2>{questions[currentQuestion].question}</h2>
              <div>
                {questions[currentQuestion].choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleChoiceClick(choice)}
                    className={`quiz-option ${choice === userAnswer ? 'selected-option' : ''}`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <button onClick={handleSubmit} disabled={feedback === 'Answer submitted!'}>Submit</button>
              <p>{feedback}</p>
              <p>Time left: {timeLeft} seconds</p>
            </>
          ) : (
            <>
              <h2>Your final score is: {score}/{questions.length}</h2>
              <button onClick={handleRestart}>Restart Quiz</button>
            </>
          )}
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Real Club of Football. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default QuizPage;
