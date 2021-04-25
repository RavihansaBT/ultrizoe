import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import addInfo from "./screens/addInfo";
import ViewInfo from './screens/ViewInfo';

function App() {
  return (
    <div className="App">
     <Router>
      <main>
        <Switch>
          <Route exact path='/' component={addInfo} />
          <Route exact path='/view' component={ViewInfo} />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
