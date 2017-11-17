import React from 'react';
import axios from 'axios';
import styles from './controller.css';
import LocationController from './locationController';
import LineController from './lineController';

const Weather = 'weather-modal';
const Image = 'image-modal';
const Location = 'location-modal';
const Line = 'line-modal';

const propTypes = {
  onAddressSelected: React.PropTypes.func.isRequired,
  onLineSelected: React.PropTypes.func.isRequired
}

class Controller extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      modal: ''
    }
  }

  toggleDialog(e, modal){
    let targetElement = e.target.getBoundingClientRect();
    let parentElement = e.target.parentNode.getBoundingClientRect();
    let x = targetElement.left - parentElement.left;
    let y = targetElement.top - parentElement.top;
    this.setState({
      modal: (this.state.modal == modal)? undefined: modal,
      x: x+45,
      y: y-50
    });
  }

  render(){
    let getModal = (modal) => {
      console.log(modal);
      switch (modal){
        case Weather:
          return <LocationController/>;
        case Location:
          return <LocationController onAddressSelected={this.props.onAddressSelected}/>
        case Line:
          return <LineController onLineSelected={this.props.onLineSelected}/>
      }
        return <LocationController/>;
    }
    let renderModal = (modal) => {
      if(modal){
      return (<div key={modal} style={{'right':this.state.x, 'top':this.state.y}} className={styles.controller_modal}><div className={styles.context}>
          {getModal(modal)}
          </div></div>)
      }
    }
    return (
      <div className={styles.content_controller}>
        <img className={styles.item} onClick={(e)=>this.toggleDialog(e, Weather)} src={'/resources/writing_view/weather_btn.svg'}/>
        <img className={styles.item} onClick={(e)=>this.toggleDialog(e, Image)} src={'/resources/writing_view/img_btn.svg'}/>
        <img className={styles.item} onClick={(e)=>this.toggleDialog(e, Location)} src={'/resources/writing_view/map_btn.svg'}/>
        <img className={styles.item} onClick={(e)=>this.toggleDialog(e, Line)} src={'/resources/writing_view/line_btn.svg'}/>
        {renderModal(this.state.modal)}
      </div>
    )
  }

}

Controller.propTypes = propTypes;

export default Controller;
