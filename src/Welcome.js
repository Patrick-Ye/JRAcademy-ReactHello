import React from 'react'
import { connect } from 'react-redux';

const Welcome = (props) => {
    return (
      <div>
        {
          props.isTeacher && 
          <h2>Hello, {props.name}, I am a Teacher</h2>
        }
        {
          !props.isTeacher &&
          <p>{`Hello ${props.name}, I am a student ${props.count}`}</p>
        }
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Welcome);