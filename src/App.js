import { useState } from 'react';
import {AppContext} from './Context';
import { Provider } from "react-redux";
import store from "./store";
// import './App.css';
import Memo from './Memo';

function App() {
  const userState = useState({
    name: "Kamsi Kodi",
    age: 23
  });
  
  return (
    <Provider store={store}>
      <AppContext.Provider value={userState}>
        <div className="App">
          <h1>Hello World</h1>
          <Memo />
        </div>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
