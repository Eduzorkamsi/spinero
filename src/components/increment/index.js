import React, { Component } from 'react';

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      show: true,
     
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="quantity_increment">
        <i class="fas fa-plus" onClick={this.IncrementItem}></i>
        <i class="fas fa-minus" onClick={this.DecreaseItem}></i>
        <div className="state_increament">
        { this.state.show ? <h6>{ this.state.clicks }</h6> : '' }
        </div>
        
      </div>
    );
  }
}

export default Increment;