 // the first way to access list of image we can ues *then statemet* 
      // any time we working with promise
       //.then((response)=>{
    //       console.log(response.data.results

import React from 'react';
import unsplash from '../API/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList'


 
class APP extends React.Component {


    state = { images:[] }

   onSearchSubmit= async (term)=>{
    const response = await unsplash.get('/search/photos',
      {
          params:{query: term},
         
       });
      
    this.setState({images:response.data.results
    })
      
    }
    
    render() { 
        return ( <div className="ui container " style={{marginTop:'5 rem'}}>
        <SearchBar  onSubmit={this.onSearchSubmit}/>
        Found:{this.state.images.length}
         <ImageList  images ={this.state.images}/>
         </div>
       );
    }
}
 
export default APP;