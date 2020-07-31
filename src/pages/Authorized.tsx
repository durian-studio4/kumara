import React from 'react';
import { Redirect, ConnectProps } from 'umi';
import Authorized from '@/utils/Authorized';
import { getRouteAuthority } from '@/utils/utils';
import Cookie from 'js-cookie';

interface AuthComponentProps extends ConnectProps {}

const AuthComponent: React.FC<AuthComponentProps> = ({
  children,
  route = {
    routes: [],
  },
  location = {
    pathname: '',
  },
}) => {
  const { routes = [] } = route;
  const isLogin = Cookie.get('token') ? true : false;

  if (!isLogin) {
    <Redirect to="/user/login" />;
  }

  return (
    <Authorized
      authority={getRouteAuthority(location.pathname, routes) || ''}
      noMatch={isLogin ? <Redirect to="/exception/403" /> : <Redirect to="/user/login" />}
    >
      {children}
    </Authorized>
  );
};

export default AuthComponent;
