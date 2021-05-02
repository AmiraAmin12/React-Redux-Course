import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
//   constructor (props){
//     super (props);
// //this the only time we did direct assignment to this.state
//     this.state ={latitude :7,
//        errMessage :''}
   
//   }

  state = {latitude :null , errMessage:''}
 
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition (
      position=> this.setState({latitude:position.coords.latitude}),
     err=>this.setState({errMessage:err.message})
  );
  }

  renderContent(){
    if(this.state.errMessage &&!this.state.latitude){
      return <div><Spinner message ={this.state.errMessage} /></div>
      //<div>Error :{this.state.errMessage}</div>
    }
    if(!this.state.errMessage && this.state.latitude){
      return <SeasonDisplay  lat ={this.state.latitude}
                             error ={this.state.errMessage}/>
    }
    return   <div><Spinner message ="Please accept location request" /></div>
  }
  
  render() {
   return(
     <div className= "border  red">
       {this.renderContent()}
     </div>
   ) 
}
 
}
 
ReactDOM.render(<App />,document.querySelector("#root"));