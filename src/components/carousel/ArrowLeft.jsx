import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const ArrowLeft = ({...props}) => {
  return (
    <button {...props}><FontAwesomeIcon style={{color: 'white', fontSize: 18}} icon={faAngleLeft}/></button>
  )
}

export default ArrowLeft