import React, { useState } from "react";
import {useSelector} from 'react-redux';
import {selectCards} from './cardsSlice.js';

export default function Card({ id }) {
  const cards = useSelector(selectCards); 
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className={flipped ? 'card back' : 'card'} onClick={(e) => setFlipped(!flipped)}>
        <p className="back-text">{flipped ? card.back : card.front}</p>
      </button>
    </li>
  );
}