/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

function LoginForm() {
  const [data, setData] = useState({ login: "", password: "" });
  const onSubmit = (event) => {
    console.log(data);
    //event.preventDafault();
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={onSubmit}>
        <label className="login-label">Login</label>
        <input
          type="text"
          name="name"
          className="input-login"
          placeholder="email"
          onChange={(e) => setData({ ...data, login: e.target.value })}
          //value={data.login}
        />
        <div className="line-gradient"></div>
        <input
          type="password"
          name="name"
          className="input-password"
          placeholder="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          //value={data.password}
        />
        <div className="line-gradient"></div>
        <input type="submit" value="Отправить" className="login-btn" />
        <div className="bottom-text">
          Don`t have account ?{" "}
          <a href="#" className="account-register-link">
            {" "}
            click to register
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
