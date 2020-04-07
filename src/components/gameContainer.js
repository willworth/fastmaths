import React, { useEffect, useState } from "react";
import "./gameContainer.css";
const GameContainer = () => {
  // state
  const [questionNumbers, setQuestionNumbers] = useState([]);
  const [response, setResponse] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(undefined);
  const [winner, setWinner] = useState(false);

  // helpers
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const generateNewQuestion = () => {
    let number1 = getRandomInt(9);
    let number2 = getRandomInt(9);
    // to ensure no poor questions.
    while (number1 < 2 || number2 < 2) {
      number1 = getRandomInt(9);
      number2 = getRandomInt(9);
    }
    setQuestionNumbers([number1, number2]);
    console.log(`generateNewQuestion has been called`);
  };

  const handleChange = (e) => {
    setResponse(e.target.value);
  };

  // this runs on first render to provide initial values
  useEffect(() => {
    generateNewQuestion();
  }, []);

  //monitor the question to update the correct answer
  useEffect(() => {
    let ans = questionNumbers[0] * questionNumbers[1];
    setCorrectAnswer(ans);
  }, [questionNumbers]);


  //handle ui changes on correct answer
  useEffect(() => {
    if (response == correctAnswer) {
      setWinner(true);
      setTimeout(function () {
        setWinner(false);
        generateNewQuestion();
      }, 3000);
    }
  }, [response, correctAnswer]);

  return (
    <div className="gamecontainer">
      {!winner &&




        <h1>Practise multiplication!</h1>
        <h3 className="question">
          What is <span className="questionNumber">{questionNumbers[0]}</span>{" "}
        times <span className="questionNumber">{questionNumbers[1]}</span> ?
      </h3>
        <form>
          <input type="number" value={response.value} onChange={handleChange} />
        </form>



      }
      {winner && <div className="winner blinking">That's right!</div>}
    </div>
  );
};

export default GameContainer;
