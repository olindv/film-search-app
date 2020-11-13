import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import FilmList from './components/FilmList/FilmList.jsx';
import FilmInfo from './components/FilmInfo/FilmInfo.jsx';
import InputSearch from './components/InputSearch/InputSearch.jsx';
import './App.css';
import { withRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={InputSearch} exact/>
        <Route path="/film-list" component={FilmList} />
        <Route path="/film/:filmId" component={FilmInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
