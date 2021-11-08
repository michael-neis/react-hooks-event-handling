import React from "react";

function MultiButton() {
  function handleClick(e) {
    console.log(`${e.target.innerHTML} was clicked`);
  }

  return (
    <div>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button>
      <button onClick={handleClick}>Some other button</button>
    </div>
  );
}

export default MultiButton;
