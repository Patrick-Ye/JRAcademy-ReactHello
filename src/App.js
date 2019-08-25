import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import WelcomeForm from './WelcomeForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      welcomeList: [
        {
          name: 'Nick',
          isTeacher: true,
        },
        {
          name: 'Tom',
          isTeacher: false,
        },
        {
          name: 'Jerry',
          isTeacher: false,
        }
      ]
    };
    
    console.log('APP constructor');
  }

  componentDidMount() {
    console.log('APP componentDidMount');
  }

  componentDidUpdate() {
    console.log('APP componentDidUpdate');
  }

  // handleAdd = (e)=>{
  //   this.setState((preState, props) => ({count:preState.count+1}));
  // }

  // handleSubtract = (e)=>{
  //   this.setState((preState, props) => {
  //     return {
  //       count: preState.count - 1
  //     };
  //   });
  // }

  render() {
    console.log('App render');
    return (
      <section className="App">
          {
            this.state.welcomeList.map((welcome, index)=>
              <Welcome 
                  key={index} 
                  name={welcome.name} 
                  isTeacher={welcome.isTeacher} 
                  count={this.state.count} 
              />
            )
          }
          <WelcomeForm />
          <Counter />
      </section>
    );
  }
}

export default App;
