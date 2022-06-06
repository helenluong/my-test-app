import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import headerpage from './headerpage';
import body from './body';
import footerpage from './footerpage';

export default function index() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default function headerpage() {
  return <h2>header</h2>;
}

export default function body() {
  return <h2>body</h2>;
}

export default function footerpage() {
  return <h2>footer</h2>;
}


