import React from 'react';
import { Redirect } from 'umi';
import { stringify } from 'querystring';
import Cookie from 'js-cookie';

interface Props {
  children: JSX.Element;
}

const SecurityLayout: React.FC<Props> = ({ children }) => {
  const token = Cookie.get('token');
  const queryString = stringify({
    redirect: window.location.href,
  });

  if (!token && window.location.pathname !== '/user/login') {
    return <Redirect to={`/user/login?${queryString}`} />;
  }

  return children;
};

export default SecurityLayout;
