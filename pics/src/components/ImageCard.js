import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
       
        super(props)
        this.state ={spans:0}
        this.imageRrf= React.createRef()
    }
    componentDidMount(  ){
       this.imageRrf.current.addEventListener('load',this.setSpans);
    }
    setSpans = ()=>{
        const hight= this.imageRrf.current.clientHeight;
        const spans =  Math.ceil(hight/9 );
        this.setState({spans})
    }
    render() { 
        const {description,urls}= this.props.image;
        
        
        return (  <div style={{gridRowEnd:`spans ${this.state.spans}`}} >
            <img 
             alt={description}
            src={urls.regular}
            ref={this.imageRrf}/>
        </div>);
    }
}
 
export default ImageCard;