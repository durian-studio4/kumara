import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import React from 'react';
import { history } from 'umi';
import { CurrentUser } from '@/models/user';
import Cookie from 'js-cookie';
import styles from './index.less';

import HeaderDropdown from '../HeaderDropdown';

export interface GlobalHeaderRightProps {
  currentUser?: CurrentUser;
  menu?: boolean;
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  onMenuClick = (event: any) => {
    const { key } = event;

    if (key === 'logout') {
      Cookie.remove('token');
      localStorage.removeItem('role');
    }

    history.push(`/user/login`);
  };

  render(): React.ReactNode {
    const currentUser = localStorage.getItem('role');

    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="logout">
          <LogoutOutlined />
          Logout
        </Menu.Item>
      </Menu>
    );

    return currentUser ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <span className={styles.name}>{String(currentUser)}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default AvatarDropdown;
