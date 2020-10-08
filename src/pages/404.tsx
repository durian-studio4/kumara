import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'umi';

const NoFoundPage: React.FC<{}> = () => {
  const history = useHistory();
  const currentUser = localStorage.getItem('role');

  const backHome = () => {
    switch (JSON.parse(String(currentUser))) {
      case 'Owner':
        return history.push('/dashboard/home');
      case 'Inventory':
        return history.push('/inventory/stok');
      case 'Master':
        return history.push('/master/karyawan');
      case 'Finance':
        return history.push('/finance/home');
      case 'Kurir':
        return history.push('/kurir');
      case 'Sales':
        return history.push('/sales/home');
      default:
        return false;
    }
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoFoundPage;
