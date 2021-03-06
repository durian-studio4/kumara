import React, { Fragment } from 'react';
import styles from '../index.less';

interface Props {
  data: any;
}

const HeaderComponent: React.FC<Props> = ({ data }) => {
  return (
    <Fragment>
      <div className={styles.box4}>
        <div className={styles.col_list}>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            PT.Anugrah Tiga Berlian
          </p>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Kumara Medica
          </p>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Jl. Pramuka No. 11 Palmeriam-Matraman-Jakarta-Timur
          </p>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            Tel.0812 9000 9921 Fax. 021-85916797
          </p>
        </div>
      </div>
      <div className={styles.box4}>
        <div className={styles.col_list}>
          <p className={styles.p} style={{ textAlign: 'center' }}>
            FAKTUR {data && data.invoice}
          </p>
          <table style={{ textAlign: 'center', width: '100%' }}>
            <tbody>
              <tr>
                <td align="left">Tanggal</td>
                <td align="center">:</td>
                <td align="right">{data.pembeli && data.tanggal}</td>
              </tr>
              <tr>
                <td align="left">Sales</td>
                <td align="center">:</td>
                <td align="right">{data.pembeli && data.nama_sales}</td>
              </tr>
              <tr>
                <td align="left">Pelanggan</td>
                <td align="center">:</td>
                <td align="right">{data.pembeli && data.pembeli.name}</td>
              </tr>
              <tr>
                <td align="left">Alamat</td>
                <td align="center">:</td>
                <td align="right">{data.pembeli && data.pembeli.alamat}</td>
              </tr>
              <tr>
                <td align="left">NPWP</td>
                <td align="center">:</td>
                <td align="right">{data.pembeli && data.pembeli.npwp}</td>
              </tr>
              <tr>
                <td align="left">Metode Pembayaran</td>
                <td align="center">:</td>
                <td align="right">{data.tempo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderComponent;
