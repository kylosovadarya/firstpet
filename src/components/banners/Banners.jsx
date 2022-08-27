import React from 'react';
import Banner from './Banner';
import classes from './banners.module.scss';
import { banners } from './BannersContent';

function Banners() {
  return (
    <div className={classes.banners}>
    {banners.map(banner => 
        <Banner key={Math.random() + Date.now()} banner={banner}/>
        )}
    </div>
  )
}

export default Banners