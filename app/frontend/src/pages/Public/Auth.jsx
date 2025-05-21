import React, { useState } from 'react';
import './Auth.scss';
import { dbClient } from "../../services/db";
import { useNavigate } from 'react-router-dom';


const Auth = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dbClient.from('user')
      .select('password')
      .eq('id', 1)
      // eq('username', username)

    if (response.error) {
      console.error();
    } else {

      if (response.data[0].password !== password) {
        return alert('Senha incorreta!');
      } else {

        localStorage.setItem('token', true);
        alert('Login realizado com sucesso!');
        return navigate('/admin_home');
      }
      console.log(response.data);
      return response.data;
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Usuário</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 password-input">
                <label htmlFor="password" className="form-label">Senha</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary icon-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <i className='icon-eye auth-icon' /> : <i className="icon-eye-blocked auth-icon" />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>

            <a className="back-link mt-2" href="/app">Voltar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;