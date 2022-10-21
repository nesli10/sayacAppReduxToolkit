import React, { Component } from 'react'
import { connect } from 'react-redux';
import {decrement, increment} from "../redux/counter.Slices";

 class CounterButtons extends Component {
  render() {
    return (
      <div>
       <button onClick={()=>this.props.increase()} className='buton'>Arttır</button>
       <button onClick={()=> this.props.decrease()} className='buton'>Azalt</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    increase: () => dispatch(increment()),
    decrease: () => dispatch(decrement()),
  };
 
};
export default connect(null,mapDispatchToProps) (CounterButtons);