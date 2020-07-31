import React, { Fragment } from 'react';
import styles from '../index.less';

function Footer() {
  return (
    <Fragment>
      <div className={styles.box3}>
        <div className={styles.col_list}>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Tanda Terima
          </p>
        </div>
      </div>
      <div className={styles.box3}>
        <div className={styles.col_list}>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            PERHATIAN
          </p>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Barang yang sudah dibeli tidak dapat dikembalikan
          </p>
        </div>
      </div>
      <div className={styles.box3}>
        <div className={styles.col_list}>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Hormat kami,
          </p>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Arga Medica
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
