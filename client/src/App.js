import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//importing custom components
import Component from './component/component';
import './App.css';

//importing store
import store from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Component />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
