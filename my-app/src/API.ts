export enum Difficulty{
EASY="easy",
MEDIUM="medium",
HARD="hard"
}
//question type dangerouslysethtml
export type Question={
category:string;
correct_answer:string;
difficulty:string;
incorrect_answer:string[];
question:string;
type:string;
}

export type QuestionState=Question&{answers:string[]};

export const computerJi=async(amount:number,difficulty:Difficulty)=>{
    const endpont=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data=await (await fetch(endpont)).json();
    return data.results;
}