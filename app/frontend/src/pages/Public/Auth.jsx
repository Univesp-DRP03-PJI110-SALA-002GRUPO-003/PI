import React, { useState } from 'react';
import './Auth.scss';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione sua lógica de autenticação aqui
    console.log({ username, password, rememberMe });
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