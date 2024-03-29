const HangManWord = () => {
    const word = "test"
    const guessedLetters = ["t"]
    return (<div style={{ display: "flex", gap: ".25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
        {word.split("").map((letter, index) =>(
            <span style={{ borderBottom: ".1em solid black" }} key={index}>
                <span style={{ visibility: guessedLetters.includes(letter)?"visible":"hidden" }}>{letter}</span>
            </span>
        ))}

    </div>);
}
export default HangManWord


// const HEAD=(
//     <div
//     style={{width:"50px",height:"50px",borderRadius:"100%",border:"10px solid black",position:"absolute",top:"50px",right:"-30px"}}
//     />
// )

// const BODY=(
//     <div
//     style={{width:"10px",height:"100px",background:"black",position:"absolute",top:"120px",right:0}}
//     />
// )

// const RIGHT_ARM=(
//     <div style={{width:"100px",height:"10px",background:"black",position:"absolute",top:"150px",right:"-100px",rotate:"-30deg",transformOrigin:"left bottom" }} />
// )

// const HangManDrawing=()=>{
//     return (
//     <>
//     <div style={{position:"relative"}}>
//         {HEAD}
//         {BODY}{RIGHT_ARM}
//     <div style={{height:"50px",width:"10px",background:"black",top:0,right:0,position:"absolute"}} />
//     <div style={{height:"10px",width:"200px",background:"black",marginLeft:"120px"}} />
//         <div style={{height:"400px",width:"10px",background:"black",marginLeft:"120px"}} />
//         <div style={{height:"10px",width:"250px",background:"black"}} />
//     </div>
//     </>
//     )
//     }

