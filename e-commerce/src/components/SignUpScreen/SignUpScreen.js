import {useEffect, useState} from "react";
import {httpGetPublic, httpPostPublic} from "../../utils/httpFunctions";
import {Link} from "react-router-dom";
import '../navbar/Navbar.css';

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
        <div className='welcome-text-container'><h1>Registrese en nuestro e-commerce</h1></div>
        <form className='form-container' onSubmit={createUser}>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Usuario:</label>
                  <input
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="User Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label2">Constraseña:</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control2"
                    id="exampleFormControlInput1"
                    placeholder="Password" />
                </div>
                <div className={'button-container'}>
                  <button type="submit" className="btn-primary">Registrarse</button>
                  <Link to={'/login'}><h4 className="navbar-element">Ingresar</h4></Link>
                </div>

      </form>


  </div>)
}

export default SignUpScreen