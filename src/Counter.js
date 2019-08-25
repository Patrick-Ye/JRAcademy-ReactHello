import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCount, subtractCount } from './actions/counterAction';
class Counter extends Component{
    constructor(props){
      super(props);
      console.log('Counter constructor');
    }

    componentDidMount() {
      console.log('Counter componentDidMount');
    }

    componentDidUpdate() {
      console.log('Counter componentDidUpdate');
    }

    handleAdd = () => {
      this.props.dispatch(addCount());
    }

    handleSubtract = () => {
      this.props.dispatch(subtractCount());
    }
  
    render(){
      console.log('Counter render');
      return(
        <div>
          <span>count is : {this.props.count} </span>
          <button onClick={this.handleSubtract}>-</button>
          <button onClick={this.handleAdd}>+</button>
        </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Counter);