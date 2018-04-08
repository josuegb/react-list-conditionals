import React from 'react';
import CharComponent from '../CharComponent/CharComponent';

const charList = (props) => {

const charArray = props.text.split('');

 return (<div className="App-char-list">
    <ul>
      {charArray.map((char, index) => {
        return <CharComponent click={() => { props.onCharClick(index) }} char={char} key={char + index + 1} />
      })}
    </ul>
  </div>
 )};


export default charList;
