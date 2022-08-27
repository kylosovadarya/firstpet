import React from 'react';
import classes from './footer.module.scss';
import LinksBlock from '../footer/LinksBlock';
import TagsBlock from '../footer/TagsBlock';

const Copyright = () => {
const links = [{
  name: 'List1',
  title: 'Get in touch',
  links: ['About us', 'Careers', 'Press Releases', 'Blog'],
},
{
  name: 'List2',
  title: 'Connections',
  links: ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Linkedin'],
},
{
  name: 'List3',
  title: 'Earnings',
  links: ['Become an Affilate', 'Advertise your product', 'Sell on Market'],
},
{
  name: 'List4',
  title: 'Account',
  links: ['Your account', 'Returns Centre', '100% purchase protection', 'Chat with us', 'Help'],
}];

const tags = ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chili peppers', 'Broccoli', 'Watermelons', 'Oranges', 'Bananas', 'Grapes', 'Cherries', 'Meat', 'Fish', 'Seo tag', 'Fresh food', 'Lemons'];


  return (
    <div className={classes.footer}>
      <LinksBlock content={links}/>
      <TagsBlock tags={tags}/>
      Copyright © 2020 petrbilek.com
    </div>
  )
}

export default Copyright