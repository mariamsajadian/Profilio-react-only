import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Mapw from './MapOl';
import NotFound from './NotFound';
import ThemeContextProvider from './ThemeContext';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <ThemeContextProvider>
            <Route path="/create">
              <Create />
            </Route>
            {/* <Route path="/blog">
              <Blog />
            </Route> */}
            <Route path="/map">
              <Mapw />
            </Route>
            {/* <Route path="/blogs/:id">
              <BlogDetails />
            </Route> */}
            </ThemeContextProvider>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

