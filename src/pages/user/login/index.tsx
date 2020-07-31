import React, { useState } from 'react';
import request from 'umi-request';
import Cookie from 'js-cookie';
import { Redirect } from 'umi';
import { setAuthority } from '@/utils/authority';
import styles from './style.less';

import LoginFrom from './components/Login';

const { UserName, Password, Submit } = LoginFrom;

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState('');
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.id === 'email') {
      return setEmail(e.target.value);
    } else {
      return setPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    request
      .post(`${REACT_APP_ENV}/admin/v1/auth/login`, {
        data: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        Cookie.set('token', response.data.token);
        setAuthority(response.data.role);
        setLogin(true);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.data.message);
        setLogin(false);
        setLoading(false);
      });
  };

  if (isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.left_background}>
        <h1>Welcome, </h1>
        <p>Log in to continue access pages</p>
      </div>
      <div className={styles.right_background}>
        <LoginFrom onSubmit={handleSubmit}>
          <p className={styles.title}>Log in</p>
          <UserName
            name="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'email must not empty!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            rules={[
              {
                required: true,
                message: 'password must not empty！',
              },
            ]}
          />
          {Boolean(isError) ? <p className={styles.p_error}>&rarr; {isError}</p> : ''}
          <Submit loading={isLoading}>Login</Submit>
        </LoginFrom>
      </div>
    </div>
  );
};

export default Login;
