import './App.css';
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";

import Inicio from "./components/Inicio";
import MisCompras from "./components/MisCompras";
import Profile from "./components/Profile";
import AuthRoute from "./components/AuthRoute";
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import EliminarProducto from "./components/EliminarProducto";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";

function App() {
  return (
  <Router>
        <div>
          <Switch>
            <Route exact={true} path="/login">
               <LoginScreen />
            </Route>
            <Route exact={true} path="/signup">
               <SignUpScreen />
            </Route>
            <Route exact={true} path="/">
               <Inicio />
            </Route>
            <Route exact={true} path={`/main/inicio`}>
              <Inicio />
            </Route>
            <Route exact={true} path={`/main/productos`}>
              <Productos />
            </Route>
            <Route exact={true} path={`/main/productos/editar/:id`}>
              <EditarProducto/>
            </Route>
            <Route exact={true} path={`/main/productos/eliminar/:id`}>
              <EliminarProducto/>
            </Route>
            <AuthRoute exact={true} path={`/main/miscompras`}>
              <MisCompras />
            </AuthRoute>
            <AuthRoute exact={true} path={`/main/profile`}>
               <Profile />
            </AuthRoute>
            <Route path="*">
               <div><h1>404</h1></div>
            </Route>
          </Switch>
        </div>
    </Router>)
};
export default App;
