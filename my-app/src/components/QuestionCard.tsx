import React from 'react'
type Props={
    question:string;
    answer:string[];
    callback:any;
    userAnswer:string;
    questionNr:number;
    totalQuestions:number;
}
const QuestionCard:React.FC<Props>=({question,
    answer,
    callback,
    userAnswer,
    questionNr,
    totalQuestions})=>{
   
    return(
        <div>
            <h2>Question Card</h2>
            <p className='number'>
                Question:
            </p>
        </div>
    )
}

export default QuestionCard