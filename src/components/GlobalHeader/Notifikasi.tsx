import React, { useEffect } from 'react';
import { Tag, message } from 'antd';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import { NoticeItem } from '@/models/global';
import { CurrentUser } from '@/models/user';
import styles from './index.less';

import NoticeIcon from '../NoticeIcon';

import useFetch from '@/hooks/useFetch';

interface Props {}

const GlobalHeaderRight: React.FC<Props> = () => {
  const [data_list, status_list, loading_list, error_list, fetchList] = useFetch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchList(`${REACT_APP_ENV}/admin/v1/notifikasi/list`);
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <NoticeIcon
      className={styles.action}
      // count={currentUser && currentUser.unreadCount}
      // onItemClick={(item) => {
      //   this.changeReadState(item as NoticeItem);
      // }}
      loading={Boolean(loading_list)}
      // onClear={this.handleNoticeClear}
      // onPopupVisibleChange={onNoticeVisibleChange}
      onViewMore={() => message.info('Click on view more')}
      clearClose
    >
      <NoticeIcon.Tab list={data_list} count={data_list} title="Notifikasi" />
    </NoticeIcon>
  );
};

export default GlobalHeaderRight;
