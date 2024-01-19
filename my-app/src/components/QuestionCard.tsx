import React from 'react'
type Props={
    question:string;
    answer:string[];
    callback:any;
    userAnswer:boolean;
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
                Question:{questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div>
                {answer.map(i=>(
                    <>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                    <div>{i}</div></>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard