import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinDeatailsPage from './pages/CoinDeatailsPage';
import CoinSummuryPage from './pages/CoinSummuryPage';
import './App.css';
import Header from './components/header';
import { WatchListContextProvider } from './context/watchListContext';
function App() {
  return (
    <div className="container" >
      <WatchListContextProvider>
      <BrowserRouter>
      <Header/>
          <Route exact path="/" component={CoinSummuryPage} />
          <Route exact path="/coins/:id" component={CoinDeatailsPage} />
      </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
