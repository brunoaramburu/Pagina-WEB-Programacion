import {useEffect, useState} from "react";
import {httpGetPublic, httpPostPublic} from "../../utils/httpFunctions";
import {Link} from "react-router-dom";


const SignUpScreen = () => {

  const [user, setUser] = useState([])

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  const fetchUser = () => {
    httpGetPublic('api/register/')
        .then((res) => setUser(res.data))
  }

  const createUser = () => {
    httpPostPublic('api/register/', { username: username, password: password})
      .then(fetchUser)
  }

  useEffect(fetchUser, [])

  return (<div className='general'>
    <div className="navbar">
      <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
      <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
      <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
      <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
    </div>
      <form onSubmit={createUser}>
        <fieldset>

          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Name</label>
            <input type="text" id="disabledTextInput" className="form-control" value={username}
                   onChange={(e) => setUsername(e.target.value) }/>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Password</label>
            <input type="text" id="disabledTextInput" className="form-control" value={password}
                   onChange={(e) => setPassword(e.target.value) }
            />
          </div>
          <button type="submit" className="btn btn-primary">REGISTRARSE</button>
          <div>
            <Link to={'/login'}><h4 className="navbar-element">Ingresar</h4></Link>

          </div>
        </fieldset>
      </form>


  </div>)
}

export default SignUpScreen