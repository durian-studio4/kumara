import React, { Fragment } from 'react';
import styles from '../index.less';

interface Props {}

const FooterComponent: React.FC<Props> = () => {
  return (
    <Fragment>
      <div className={styles.box3}>
        <div className={styles.col_list}>
          <p style={{ textAlign: 'center' }}>Tanda Terima</p>
        </div>
      </div>
      <div>
        <div>
          <p style={{ textAlign: 'center' }}>PERHATIAN</p>
          <p style={{ textAlign: 'center' }}>Barang yang sudah dibeli tidak dapat dikembalikan</p>
        </div>
      </div>
      <div>
        <div>
          <p style={{ textAlign: 'center' }}>Hormat kami,</p>
          <p style={{ textAlign: 'center' }}>Kumara Medical</p>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterComponent;
