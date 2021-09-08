import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Questao1 from './pages/questao1';
import Questao2 from './pages/questao2';
import Questao3 from './pages/questao3';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container titulo" style={{ textAlign: 'center' }}>
          <h1>Atividade 1 da V1</h1>
          <h3>Questões feitas usando ReactJS e NodeJS (back-end)</h3>
        </div>
        <Switch>
          <Route path="/questao1">
            <Questao1 />
          </Route>
          <Route path="/questao2">
            <Questao2 />
          </Route>
          <Route path="/questao3">
            <Questao3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
