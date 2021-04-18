import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import Cookie from 'js-cookie';
import Table from './Table';
import axios from 'axios'

interface Props {}


const StokBarangComponent: React.FC<Props> = () => {
  const [stockOpnames, setStockOpnames] = useState([]);
  const [isLoadStockOpnames, setIsLoadStockOpnames] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(async() => {
      setIsLoadStockOpnames(true);
      await axios.get(`${REACT_APP_ENV}/admin/v1/inventory/stock-opname`,
      {
        headers:{
          Authorization: String(Cookie.get('token'))
        }
      }).then(res=>{
        setStockOpnames(res.data.data);
      }).catch(error=>{
        console.log(`error`, error);
      })
      setIsLoadStockOpnames(false);
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickAddStockOpname = () =>{
    history.push('/inventory/stok-opname/add');
  }
  
  return (
    <div>
      <div style={{display:'flex', margin:"0px 0px 10px 0px"}}>
        <p style={{fontWeight:"bold"}}>Stok Opname</p>
        <div style={{flex:1}}/>
        <Button>Download Template</Button>
        <div style={{margin:"5px"}}/>
        <Button onClick={onClickAddStockOpname}>Tambah Stok Opname</Button>
      </div>
      <Table
        data={stockOpnames}
        loading={isLoadStockOpnames}
      />
    </div>
  );
};

export default StokBarangComponent;
