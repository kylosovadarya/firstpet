import React from 'react';
import classes from './linksBlock.module.scss'

const LinksBlock = ({content}) => {

  return (
    <div className={classes.linksBlock}>
        {content.map(col => 
            <div key={col.name}>
            <h2>{col.title}</h2>
            {col.links.map(item => 
                <p key={item}>{item}</p>
                )}
            </div>
        )}
    </div>
  )
}

export default LinksBlock