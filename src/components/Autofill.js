import AutoWords from "./AutoWords"


function Autofill({words, fillFun}){

    let arrayCheck = Array.isArray(words)

    let wordDivs
    
    if (arrayCheck){
    wordDivs = words.map(word => <AutoWords fillFun = {fillFun} word={word} key = {word}/>)
    } else {
    wordDivs = words
    }

    return (
      <div style={{position: "absolute"}}>
        {wordDivs}
      </div>
    )
  }

export default Autofill