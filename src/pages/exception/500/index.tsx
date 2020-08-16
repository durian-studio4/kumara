import { Link } from 'umi';
import { Result, Button, Modal } from 'antd';
import React from 'react';

export default () => (
  <Modal visible={true}>
    <Result
      // status="500"
      // title="500"
      style={{
        background: 'none',
      }}
      subTitle="Sorry, the server is reporting an error."
      // extra={
      //   <Link to="/">
      //     <Button type="primary">Back Home</Button>
      //   </Link>
      // }
    />
  </Modal>
);
