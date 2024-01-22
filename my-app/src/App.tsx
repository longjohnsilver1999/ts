import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import "./App.css";
import { computerJi } from "./API";
import { QuestionState, Difficulty } from "./API";
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setloading] = useState(false);
  const [questions, setquestions] = useState<QuestionState[]>([]);
  const [number, setnumber] = useState(0);
  const [userAnswers, setuseranswers] = useState<AnswerObject[]>([]);
  const [score, setscore] = useState(0);
  const [gameover, setgameover] = useState(false);
  const Totalques = 10;
  // console.log(computerJi(Totalques, Difficulty.EASY));

  const shuruKiaJay = async () => {
    setloading(true);
    setgameover(false);
    const newQuestions = await computerJi(Totalques, Difficulty.MEDIUM);
    setquestions(newQuestions);
    console.log(newQuestions);
    setscore(0);
    setuseranswers([]);
    setloading(false);
  };

  useEffect(() => {
    shuruKiaJay();
  }, []);
  const LockKardiaJay = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const aglaSawal = () => {};
  return (
    <div className="App">
      <h1>KBC</h1>
      <button className="start" onClick={shuruKiaJay}>
        Kaun banega crorepati.Lets Play
      </button>
      <p className="score">Score:</p>
      <p>Heres the next question..</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={Totalques}
        question={questions[number]?.question}
        answers={questions[number]?.answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={LockKardiaJay}
      />
      <button className="next" onClick={aglaSawal}>
        Next question
      </button>
      <p></p>
    </div>
  );
}

export default App;
