import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
      text:"Lets hit the beach",
      iconName: "sun",
    },
    winter: {
      text:" Its Winter",
      iconName: "snowflake",
    }
  }

const getSeason =(lat ,month) => {
  if (month >2 && month < 9){
     return lat > 0?'summer' :'winter';
  }else{
    return lat > 0? 'winter' :'summer';
  }

}


const SeasonDisplay = (props) => {
const season = getSeason(props.lat, new Date().getMonth())
console.log(season);
 const {text,iconName}= seasonConfig[season];//{text,iconName}
    return ( <div className={` ${season} season-display`}>
        <i className={` icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={` icon-right massive ${iconName} icon`} />
        </div> );
}
 
export default SeasonDisplay;
