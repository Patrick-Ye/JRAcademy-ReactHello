import React from 'react';

class WelcomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  }
  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({name: e.target.value})
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <span>Name</span>
        <input name="name" value={this.state.name} onChange={this.onInputChange} />
        <button>Submit</button>       
      </form>
    );
  }
}

export default WelcomeForm;