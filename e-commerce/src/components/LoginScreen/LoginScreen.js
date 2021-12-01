import '../LoginScreen/LoginScreen.css';
import {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";
import {Link, useHistory} from 'react-router-dom';
import '../navbar/Navbar.css';

const LoginScreen = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const history = useHistory();

  const login = (e) => {
    e.preventDefault()
    httpPost('api/login/', {username: username, password: password}).then((res) => {
      localStorage.setItem('token', res.data.access)
      history.push('/main/inicio')
    })
  }

  return (
    <div className='login-screen'>
      <div className="navbar">
         <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
         <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
         <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
         <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
      </div>
      <div className='welcome-text-container'><h1>Ingrese a nuestro e-commerce</h1></div>
      <form className='form-container' onSubmit={login}>
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
          <button type="submit" className="btn-primary">Ingresar</button>
          <Link to={'/signup'}><h4 className="navbar-element">Crear Cuenta</h4></Link>
        </div>
      </form>
    </div>
  )
}

export default LoginScreen