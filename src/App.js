
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
