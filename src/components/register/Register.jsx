
import "./register.scss";

export default function Register() {

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://play-lh.googleusercontent.com/3_7Y-uenEqkS4BeEtWLymvvW2Fd4lkYV3JaT4G_BxNMNen2XQ7v_zv3s1-U8NO2P4A"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies</h1>
        <h2>Watch </h2>
        <p>
          Ready to watch?
        </p>
         (
          <div className="input">
            <input type="email" placeholder="email address"  />
            <button className="registerButton" o>
              Lets Go
            </button>
          </div>
        ) 
        (
          <form className="input">
            <input type="password" placeholder="password"/>
            <button className="registerButton" >
              Watch Movies
            </button>
          </form>
        )
      </div>
    </div>
  );
}