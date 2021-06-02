import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';

const items =[
  {
    title: 'What is react ?',
    content :'it is a javascript library'
  },
   {
    title: 'Why use it  ?',
    content :'its easy and awsome way to render elements'
  },
  {
    title: 'How to use  react ?',
    content :' follow documentation instruction its easy'
  }
]

const options =[{
  label:'The color Red',
  value:'red'
},
{
  label:'The color Green',
  value:'green'
},
{
  label:'The color Blue',
  value:'blue'
}]
export default () =>{
  const [selected ,setSeclected] = useState(options[0])
return  (<div>
  <Dropdown 
   options={options} 
   selected={selected}
   onSelectedChange={setSeclected}
  />
</div>)
};

