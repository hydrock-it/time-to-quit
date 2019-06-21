import React, { Component } from 'react'
import './style.scss';

class Step extends Component {
  render() {
    return (
      <div className="step">
        <div className="step--content">{ this.props.children }</div>
        <br/>
        <div className="step--controll">
          <button 
            className='step--control' 
            onClick={this.props.prevStep} 
            disabled={this.props.isFirst} 
            hidden={this.props.hideControll}>Prev</button>
          <button 
            className='step--control' 
            onClick={this.props.nextStep} 
            disabled={this.props.isLast} 
            hidden={this.props.hideControll}>Next</button>
          </div>
      </div>
    );
  }
}

export default Step;
