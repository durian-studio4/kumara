// https://umijs.org/config/
import { defineConfig, utils } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import webpackPlugin from './plugin.config';
const { winPath } = utils; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV, GA_KEY } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  analytics: GA_KEY
    ? {
        ga: GA_KEY,
      }
    : false,
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          // authority: ['Owner'],
          routes: [
            {
              path: '/',
              redirect: '/dashboard/home',
              authority: ['Owner'],
            },
            {
              path: '/dashboard',
              name: 'Dashboard',
              icon: 'home',
              authority: ['Owner'],
              routes: [
                {
                  name: 'Home',
                  icon: 'home',
                  path: '/dashboard/home',
                  component: './dashboard/Home',
                },
                {
                  name: 'Pendapatan',
                  icon: 'stock',
                  path: '/dashboard/pendapatan',
                  component: './dashboard/Pendapatan',
                },
                {
                  name: 'Pengeluaran',
                  icon: 'stock',
                  path: '/dashboard/pengeluaran',
                  component: './dashboard/Pengeluaran',
                },
              ],
            },
            {
              name: 'List Harga',
              icon: 'table',
              path: '/listharga',
              component: './list_harga',
              authority: ['Owner', 'Finance', 'Sales', 'Inventory'],
            },
            {
              path: '/sales',
              name: 'Sales',
              icon: 'user',
              authority: ['Owner', 'Finance', 'Sales'],
              routes: [
                {
                  name: 'Home',
                  icon: 'home',
                  path: '/sales/home',
                  component: './sales/Home',
                },
                {
                  name: 'POS',
                  icon: 'shoppingCart',
                  path: '/sales/pos',
                  component: './sales/Pos/Home',
                },
                {
                  name: 'Pos Keranjang',
                  exact: true,
                  hideInMenu: true,
                  path: '/sales/pos/:id',
                  component: './sales/Pos/Keranjang',
                },
                {
                  name: 'Pos Pembayaran',
                  exact: true,
                  hideInMenu: true,
                  path: '/sales/pos/:id/pembayaran',
                  component: './sales/Pos/Pembayaran',
                },
                {
                  name: 'Piutang',
                  icon: 'profile',
                  path: '/sales/piutang',
                  component: './sales/Piutang',
                },
                {
                  name: 'Retur',
                  icon: 'rotateLeft',
                  path: '/sales/retur',
                  component: './sales/Retur',
                },
              ],
            },
            {
              name: 'Inventory',
              icon: 'inbox',
              path: '/inventory',
              authority: ['Owner', 'Inventory'],
              routes: [
                // {
                //   name: 'Stok Opname',
                //   icon: 'folder',
                //   path: '/inventory/stok-opname',
                //   component: './inventory/StockOpname',
                // },
                {
                  name: 'Tambah Stok Opname',
                  exact: true,
                  hideInMenu: true,
                  path: '/inventory/stok-opname/add',
                  component: './inventory/StockOpname/Add',
                },
                {
                  name: 'Edit Stok Opname',
                  exact: true,
                  hideInMenu: true,
                  path: '/inventory/stok-opname/edit/:id',
                  component: './inventory/StockOpname/Edit',
                },
                {
                  name: 'Stok Barang',
                  icon: 'calendar',
                  path: '/inventory/stok',
                  component: './inventory/Barang/Stok',
                },
                {
                  name: 'Retur Barang',
                  icon: 'rotateLeft',
                  path: '/inventory/retur',
                  component: './inventory/Barang/Retur',
                },
                {
                  name: 'Request Order',
                  icon: 'reconciliation',
                  path: '/inventory/request',
                  component: './inventory/Order/Request/Home',
                },
                {
                  name: 'Request Order',
                  hideInMenu: true,
                  exact: true,
                  path: '/inventory/request/:id',
                  component: './inventory/Order/Request/Keranjang',
                },
                {
                  name: 'Confirm Order',
                  icon: 'fileDone',
                  path: '/inventory/confirm',
                  component: './inventory/Order/Confirm',
                },
                {
                  name: 'Konsinyasi',
                  icon: 'folder',
                  path: '/inventory/konsinyasi',
                  component: './inventory/Konsinyasi',
                },
              ],
            },
            {
              name: 'Kurir',
              icon: 'user',
              path: '/kurir',
              component: './kurir',
              authority: ['Owner', 'Kurir', 'Sales', 'Inventory'],
            },
            {
              name: 'Finance',
              icon: 'exception',
              path: '/finance',
              authority: ['Owner', 'Finance'],
              routes: [
                {
                  name: 'Home',
                  icon: 'home',
                  path: '/finance/home',
                  component: './finance/Home',
                },
                {
                  name: 'Utang Toko',
                  icon: 'fileText',
                  path: '/finance/utang',
                  component: './finance/Toko/Utang',
                },
                {
                  name: 'Piutang Toko',
                  icon: 'fileText',
                  path: '/finance/piutang',
                  component: './finance/Toko/Piutang',
                },
                {
                  name: 'Suplier',
                  icon: 'fileText',
                  path: '/finance/suplier',
                  component: './finance/Suplier',
                },
                {
                  name: 'Operational',
                  icon: 'snippets',
                  path: '/finance/operational',
                  component: './finance/Operational',
                },
                {
                  name: 'Piutang Sales',
                  icon: 'profile',
                  path: '/finance/sales/piutang',
                  component: './finance/Piutang',
                },
                {
                  name: 'Invoice',
                  icon: 'exception',
                  path: '/finance/invoice',
                  component: './finance/Invoice',
                },
                {
                  name: 'Cek Transfer',
                  icon: 'checkCircle',
                  path: '/finance/transfer',
                  component: './finance/Transfer',
                },
                {
                  name: 'Setoran',
                  icon: 'moneyCollect',
                  path: '/finance/setoran',
                  component: './finance/Setoran',
                },
              ],
            },
            {
              name: 'Master',
              icon: 'folderOpen',
              path: '/master',
              authority: ['Owner', 'Master'],
              routes: [
                {
                  name: 'Data Karyawan',
                  icon: 'fileText',
                  path: '/master/karyawan',
                  component: './master/Karyawan',
                },
                {
                  name: 'Data Barang',
                  icon: 'fileText',
                  path: '/master/barang',
                  component: './master/Barang',
                },
                {
                  name: 'Data Cabang',
                  icon: 'fileText',
                  path: '/master/cabang',
                  component: './master/Cabang',
                },
                {
                  name: 'Data Pelanggan',
                  icon: 'fileText',
                  path: '/master/pelanggan',
                  component: './master/Pelanggan',
                },
                {
                  name: 'Data Suplier',
                  icon: 'fileText',
                  path: '/master/suplier',
                  component: './master/Suplier',
                },
                {
                  name: 'Data Notifikasi',
                  icon: 'fileText',
                  path: '/master/notifikasi',
                  component: './master/Notifikasi',
                },
              ],
            },
            // {
            //   name: 'result',
            //   icon: 'CheckCircleOutlined',
            //   path: '/result',
            //   routes: [
            //     {
            //       name: 'success',
            //       icon: 'smile',
            //       path: '/result/success',
            //       component: './result/success',
            //     },
            //     {
            //       name: 'fail',
            //       icon: 'smile',
            //       path: '/result/fail',
            //       component: './result/fail',
            //     },
            //   ],
            // },
            // {
            //   name: 'exception',
            //   icon: 'warning',
            //   path: '/exception',
            //   routes: [
            //     {
            //       name: '403',
            //       icon: 'smile',
            //       path: '/exception/403',
            //       component: './exception/403',
            //     },
            //     {
            //       name: '404',
            //       icon: 'smile',
            //       path: '/exception/404',
            //       component: './exception/404',
            //     },
            //     {
            //       name: '500',
            //       icon: 'smile',
            //       path: '/exception/500',
            //       component: './exception/500',
            //     },
            //   ],
            // },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: 'https://api.posarmed.id', // 'https://api.posarmed.id', 'http://127.0.0.1:8000'
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    modules: {
      getLocalIdent: (
        context: {
          resourcePath: string;
        },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }

        const match = context.resourcePath.match(/src(.*)/);

        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = winPath(antdProPath)
            .split('/')
            .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
            .map((a: string) => a.toLowerCase());
          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }

        return localName;
      },
    },
  },
  manifest: {
    basePath: '/',
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  chainWebpack: webpackPlugin,
});
