import React from 'react';
import classes from './cards.module.scss';
import Card from './Card';
import { cards } from './CardsContent';

const Cards = (props) => {
  return (
    <div className={classes.cards}>
      {cards.map(card => 
        <Card card={card} key={Math.random() + Date.now()}/>
        ).slice(4 - props.count)
      }
    </div>
  )
}

export default Cards