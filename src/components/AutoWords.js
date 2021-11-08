

function AutoWords({word, fillFun}){
    return(
        <div 
        style={{backgroundColor: "white", outline: "black", cursor:"pointer"}}
        onClick={(e) => fillFun(e.target.innerHTML)}
        >
            {word}
        </div>
    )
}

export default AutoWords