import RockPaperScissors from './components/RockPaperScissors/RockpaperScissors'
import Leaderbaord from './components/Leaderboard/Leaderbaord'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
           <RockPaperScissors/>
          </Route>
          <Route exact path="/leaderboard">
           <Leaderbaord/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
