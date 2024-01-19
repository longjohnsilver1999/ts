export enum Difficulty{
EASY="easy",
MEDIUM="medium",
HARD="hard"
}

export const computerJi=async(amount:number,difficulty:Difficulty)=>{
    const endpont=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data=await (await fetch(endpont)).json();
    console.log(data)
}