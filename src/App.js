import React from 'react';
import './App.css';
import BasicRouter from './Config/Router/Router'
import { Provider } from 'react-redux'
import store from './Config/Redux'
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Provider store={store}>
      <BasicRouter />
        </Provider>
    </div>
  );
} 
}

export default App;
