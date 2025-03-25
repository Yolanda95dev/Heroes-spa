import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()


  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Yolanda')
    setTimeout(()=>{
      navigate(lastPath, {
        replace: true
      })
    },100)
  }

  return (
    <>
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </>
  )
}

