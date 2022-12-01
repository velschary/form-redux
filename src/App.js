import logo from './logo.svg';
import './App.css';
import { FormComp } from './comp/formcomp';
import {Provider} from 'react-redux'
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <FormComp />
      </Provider>
      
    </div>
  );
}

export default App;
