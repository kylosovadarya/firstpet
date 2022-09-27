import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ArrowRight = React.forwardRef(({...props}, ref) => {
  return (
    <button {...props} ref={ref}><FontAwesomeIcon style={{color: 'white', fontSize: 18}} icon={faAngleRight}/></button>
  )
})

export default ArrowRight