import './App.css';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import Inicio from "./components/Inicio";
import MisCompras from "./components/MisCompras";
import MiCuenta from "./components/MiCuenta";
import Navbar from "./components/navbar/Navbar";
import AuthRoute from "./components/AuthRoute";
import Deportes from "./components/Deportes";
import Indumentaria from "./components/Indumentaria";
import Electronica from "./components/Electronica";

function App() {
  return (
  <Router>
        <div>
          <Switch>

            <Route exact={true} path="/main">
               <Navbar />
            </Route>
            <Route exact={true} path={`/main/inicio`}>
              <Inicio />
            </Route>
            <Route exact={true} path={`/main/deportes`}>
              <Deportes />
            </Route>
            <Route exact={true} path={`/main/indumentaria`}>
              <Indumentaria />
            </Route>
            <Route exact={true} path={`/main/electronica`}>
              <Electronica />
            </Route>
            <AuthRoute exact={true} path={`/main/miscompras`}>
              <MisCompras />
            </AuthRoute>
            <AuthRoute exact={true} path={`/main/micuenta`}>
               <MiCuenta />
            </AuthRoute>
            <Route path="*">
               <div><h1>404</h1></div>
            </Route>
          </Switch>
        </div>
    </Router>)
};
export default App;
