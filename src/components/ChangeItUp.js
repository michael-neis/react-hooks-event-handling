import React from "react";
import Autofill from "./Autofill";
import { useState } from "react";

function ChangeItUp() {
  const wordArray = ["Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  " North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"];

  const [dropdownWords, setdropdownWords] = useState()

  function handleChange(event) {
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  function handleAuto(e){
    let letters = e.target.value
    let matchingWords = [];

    for (let word of wordArray){
      if (letters.substr(0, letters.length).toLowerCase() === word.substr(0, letters.length).toLowerCase()){
        matchingWords.push(word)
        } 
    }

    if(!letters){
      setdropdownWords ()
    } else if (matchingWords.length < 1){
      setdropdownWords('no words found')
    } else {
      setdropdownWords(matchingWords)
    }
  }

  function fillBoxWith (word){
    let autoBoxRollout = document.querySelector('#autoFillBox')
    autoBoxRollout.value = word
    setdropdownWords ()
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={handleAuto}
        placeholder="Enter search term..."
        autoComplete= "off"
        id = "autoFillBox"
      />
      <Autofill words = {dropdownWords} fillFun = {fillBoxWith}/>
      <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default ChangeItUp;
