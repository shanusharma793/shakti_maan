import React from 'react'
import  ComponentA from './components/ComponentA';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store = {store}>
      <div className="App">
      <ComponentA />
    </div>
    </Provider>
    
  );
}

export default App;
