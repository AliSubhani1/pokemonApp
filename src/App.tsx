import './App.css';
import AppRouter from './Routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
