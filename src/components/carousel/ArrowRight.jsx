import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ArrowRight = ({...props}) => {
  return (
    <button {...props}><FontAwesomeIcon style={{color: 'white', fontSize: 18}} icon={faAngleRight}/></button>
  )
}

export default ArrowRight