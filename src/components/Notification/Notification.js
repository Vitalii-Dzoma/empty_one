import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class Notification extends Component {
    state = {
    visible:false,
}

    show = () => {
        this.setState({visible:true})
    }


  render() {
    return <div>{<h1 className="message">{this.props.message}</h1>}</div>;
  }
}
export default Notification;