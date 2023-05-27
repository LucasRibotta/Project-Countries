import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/actions';
import styles from './Game.module.css';

function Game() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries.length > 0) {
      generateQuestion();
    }
  }, [countries]);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const correctAnswer = countries[randomIndex].name;

    const incorrectAnswers = generateIncorrectAnswers(correctAnswer);

    const question = {
      image: countries[randomIndex].flags, 
      answers: shuffleArray([...incorrectAnswers, correctAnswer]),
      correctAnswer: correctAnswer,
    };

    setCurrentQuestion(question);
  };

  const generateIncorrectAnswers = (correctAnswer) => {
    const incorrectAnswers = [];

    while (incorrectAnswers.length < 3) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      const incorrectAnswer = countries[randomIndex].name;

      if (
        incorrectAnswer !== correctAnswer &&
        !incorrectAnswers.includes(incorrectAnswer)
      ) {
        incorrectAnswers.push(incorrectAnswer);
      }
    }

    return incorrectAnswers;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleAnswerSelection = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(answer);
    setGameOver(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer('');
    setGameOver(false);
    generateQuestion();
  };

  if (countries.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.game}>
      {currentQuestion && !gameOver && (
        <div className={styles.questionContainer}>
          <img src={currentQuestion.image} alt="Country" className={styles.image} />
          <h3 className={styles.question}>Which country is this?</h3>
          <ul className={styles.answers}>
            {currentQuestion.answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelection(answer)}
                className={`${styles.answer} ${selectedAnswer === answer ? styles.selected : ''}`}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}

      {gameOver && (
        <div className={styles.gameOver}>
          <h3 className={styles.result}>
            {selectedAnswer === currentQuestion.correctAnswer
              ? 'Correct!'
              : 'Wrong!'}
          </h3>
          <p className={styles.score}>
            Your score: {score} / {countries.length}
          </p>
          <button onClick={handleNextQuestion} className={styles.nextButton}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default Game;